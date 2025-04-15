import { useEffect, useState } from 'react';
import API from '../Api';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('Low');

  const fetchTasks = async () => {
    try {
      const res = await API.get('/tasks');
      setTasks(res.data);
    } catch (err) {
      console.error('Failed to fetch tasks');
    }
  };

  const addTask = async () => {
    if (!title) return;
    await API.post('/tasks', { title, priority });
    setTitle('');
    fetchTasks();
  };

  const completeTask = async (id) => {
    await API.put(`/tasks/${id}`);
    fetchTasks();
  };

  const deleteTask = async (id) => {
    await API.delete(`/tasks/${id}`);
    fetchTasks();
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="mb-4 text-center">Task Dashboard</h2>

          {/* Add Task Form */}
          <div className="row mb-4">
            <div className="col-md-5 mb-2">
              <input
                className="form-control"
                placeholder="Task title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="col-md-3 mb-2">
              <select
                className="form-select"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              >
                <option value="Low">Low</option>
                <option value="High">High</option>
              </select>
            </div>
            <div className="col-md-4 mb-2">
              <button className="btn btn-primary w-100" onClick={addTask}>
                Add Task
              </button>
            </div>
          </div>

          {/* Task List */}
          <ul className="list-group">
            {tasks.length === 0 && (
              <li className="list-group-item text-center text-muted">No tasks found</li>
            )}
            {tasks.map((task) => (
              <li
                key={task._id}
                className={`list-group-item d-flex justify-content-between align-items-center ${
                  task.status === 'Completed' ? 'list-group-item-success' : ''
                }`}
              >
                <div>
                  <strong>{task.title}</strong> &nbsp;
                  <span className={`badge bg-${task.priority === 'High' ? 'danger' : 'secondary'} me-2`}>
                    {task.priority}
                  </span>
                  <span className="badge bg-info">{task.status}</span>
                </div>

                <div>
                  {task.status === 'Pending' && (
                    <button
                      className="btn btn-sm btn-success me-2"
                      onClick={() => completeTask(task._id)}
                    >
                      Mark Done
                    </button>
                  )}
                  <button
                    className="btn btn-sm btn-outline-danger"
                    onClick={() => deleteTask(task._id)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
