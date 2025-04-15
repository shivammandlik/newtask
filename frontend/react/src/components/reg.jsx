import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1111/register", formData);
      alert("successfully regester");
      navigate('/login')

    } catch (error) {
      alert(error.response.data.message);
    }
  };

  return (
    <div className="div">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" onChange={handleChange} required /><br></br>
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required /><br></br>
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Register</button>
        <Link to={"/login"}
          
          className=""
        >
       Login
        </Link>
      </form>
    </div>
  );
};

export default Register;
