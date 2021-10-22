const express= require('express');
const colors = require('colors');

const app=express();
let PORT = process.env.YOUR_PORT || process.env.PORT || 3000;

app.use(express.json());