const express= require('express');
const colors = require('colors');
const logger = require('./config/winston')

const app=express();
let PORT = process.env.YOUR_PORT || process.env.PORT || 3000;

app.use(express.json());

const router = require('./router.js');
app.use(router);

app.listen(PORT , () => {
    console.log(`Server on port ${PORT}`.bgGreen.black);
})