import { Component, OnInit } from "@angular/core";
import { EmployeeService } from '../employee.service';
import { Employee } from './employee-list-model';
import { MatButtonModule } from "@angular/material/button"
import { MatSnackBar } from "@angular/material/snack-bar"
import { Observable } from 'rxjs';
import { NgForm } from "@angular/forms"


@Component({
    selector:'employee-list',
    templateUrl:'./employee-list-component.html',
    providers:[EmployeeService]

})

export class EmployeeListComponent implements OnInit{
    constructor(private empService:EmployeeService,private snackBar:MatSnackBar){}
    ngOnInit(){
        this.getEmployees()
        this.empService.selectedEmployee = {
          name:'',
          age:'',
          position:'',
          department:'',
          salary:null,

        }

    }
    getEmployees(){
      return this.empService.getPosts().subscribe(res=>{
        this.empService.emp = res as Employee[]
      })
    }
    addPost(form:NgForm){
      if(form.valid && form.value._id!=undefined){
        this.empService.updateEmployees(form.value).subscribe(res=>{
            location.reload(true)
            this.snackBar.open("Updated Successfullly!",'Dismiss')
          })
      }
      if(form.valid && form.value._id==undefined){
        this.empService.addPosts(form.value).subscribe(res=>{
          location.reload(true)
          this.snackBar.open("Posted Successfullly!",'Dismiss')
        })
      }
      if(!form.valid && form.value._id == undefined){
        this.snackBar.open("Please Fill Up The Form","Dismiss")
      }
    }

    deleteEmployees(_id:string){
      this.empService.deleteEmployees(_id).subscribe(res=>{
        if(res.success==true){
            location.reload(true)
            this.snackBar.open("Deleted Successfully!","Dismiss")
        }
      })
    }
    onEdit(employee:Employee){
      this.empService.selectedEmployee = employee
    }
}
