
let express=require("express")
let {getTasks,addTask,markComplete,deleteTask}=require('./../controller/task.js')
let protect =require("../middleware/authmiddle.js")
const router = express.Router();
router.use(protect);

router.get('/', getTasks);
router.post('/', addTask);
router.put('/:id', markComplete);
router.delete('/:id', deleteTask);

module.exports=router;
