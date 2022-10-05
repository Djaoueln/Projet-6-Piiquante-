require('dotenv').config();
const express = require("express")
const app = express();
const cors = require("cors");

// middleware
app.use(cors());
 app.use(express.json());

// routes

 module.exports = { app, express };