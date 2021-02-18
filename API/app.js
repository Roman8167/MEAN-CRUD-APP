const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const cors = require("cors")
require("./process.env")

mongoose.connect(url,()=>{
    console.log("Connected to Mongoose")
})


const controller = require("./controller/controller")
//middleware
app.use(cors({origin:'http://localhost:4200'}))
app.use(bodyParser.json())
app.use("/",controller)
const port = 3000;
app.listen(port,()=>{
    console.log(`Server running at port ` + `${port}`)
})
