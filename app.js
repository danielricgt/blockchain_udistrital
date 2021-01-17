'use strict'
const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
require('dotenv/config');
app.use(cors())

var port = process.env.PORT || 4000;

var bienesRouter = require('./routes/bienes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', bienesRouter);

app.get('/',(req,res) => {
    res.json({ message: "Api Auth" })
});

app.listen(port ,() =>{
  console.log(`Api runnig for port ${process.env.PORT}`);
})