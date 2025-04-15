// import express from 'express';
// import { register, login } from '../controller/auth.js';

let express=require("express");
// const { model } = require("mongoose");
let{ register,login} =require("../controller/auth.js")


const router = express.Router();
router.post('/register', register);
router.post('/login', login);

module.exports=router
