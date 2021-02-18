const express = require("express");
const router = express.Router();
const OBJECTID = require("mongodb").ObjectId
const Employees = require("../model/Employees")
router.get("/employees",(req,res)=>{
    Employees.find({},(err,docs)=>{
        if(err){
            res.json({message:`Error ${404}`})
        }
        else{
            if(docs.length==[]){
                res.send("Empty Employee List!")
            }
            else{
                res.send(docs)
            }
        }
    })
})

router.get("/employees/:id",(req,res)=>{
    var id = OBJECTID(req.params.id)
    Employees.findById(id,(err,docs)=>{
        if(err){
            res.json({message:`Error Occured!`})
        }
        else{
            res.json({success:true,docs:docs})
        }
    })
})
router.post("/employees",(req,res)=>{
    var newEmployee = {
        name:req.body.name,
        age:req.body.age,
        position:req.body.position,
        department:req.body.department,
        salary:req.body.salary,
        created_date:new Date()
    }
    const newEmp = new Employees(newEmployee)
    newEmp.save((err,docs)=>{
        if(err){
            res.json({message:`Error ${404} Occured!`})
        }
        else{
            res.json({success:true,message:"New Employee Collection Added!"})
        }
    })
    
})
router.delete("/employees/:id",(req,res)=>{
    var id = OBJECTID(req.params.id)
    Employees.findByIdAndRemove(id,(err,docs)=>{
        if(err){
            console.log(err)
        }
        else{
            res.send({success:true,docs:docs})
        }
    })
})
router.put("/employees/:id",(req,res)=>{
    var id= OBJECTID(req.params.id)
    
    var updatedEmployee = {name:req.body.name,age:req.body.age,position:req.body.position,department:req.body.department,salary:req.body.salary}
    Employees.findByIdAndUpdate(id,{$set:updatedEmployee},(err,docs)=>{
        if(err){
            res.json({message:"Error Occured!"})
        }
        else{
            res.json({success:true,message:"Updated Successfully!"})
        }
    })
})
router.delete("/employees",(req,res)=>{
    Employees.deleteMany((err,docs)=>{
        if(err){
            res.json({message:`Error Occured!`})
        }
        else{
            res.json({success:true,message:"Successfully Removed All!"})
        }
    })
})
module.exports = router