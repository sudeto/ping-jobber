const express = require("express");
const process = require("process");
const path = require("path");

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
// const HOST = '0.0.0.0';

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname,'status.html'))
})

app.listen(PORT, () => {
    // console.log(`Server is running on ${HOST}:${PORT}`);
    console.log(`Server is running on ${PORT}`);
});