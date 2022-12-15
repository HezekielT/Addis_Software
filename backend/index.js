const express = require('express');

const cors = require("cors");
const port = process.env.PORT || 5000;

require('dotenv').config();

const app = express();
const dbo = require("./DB/conn")

dbo();
app.use(cors);
app.use(express.json());
app.use('/',require('./routes/employee'));



app.listen(port, () => {
  console.log(`Currently Listening at http://localhost:${port}`)
})