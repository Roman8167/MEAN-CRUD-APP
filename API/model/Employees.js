const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Employee = new Schema({
    name:{
        type:String
    },
    age:{
        type:Number
    },
    position:{
        type:String
    },
    department:{
        type:String
    },
    salary:{
        type:Number
    },
    created_date:{
        type:Date
    }
})

const EmployeeModel = mongoose.model("Employees",Employee);
module.exports = EmployeeModel

