import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Employee } from './employee-list/employee-list-model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class EmployeeService{
    readonly url = "http://localhost:3000/employees";
    emp:Employee[];
    selectedEmployee:Employee;
    constructor(private http:HttpClient){}
    getPosts(){
      return this.http.get(this.url)
    }
    addPosts(emp:Employee){
    return this.http.post(`${this.url}`,emp)
    }
    deleteEmployees(_id:string){
      return this.http.delete(`${this.url}/${_id}`)
    }
    updateEmployees(emp:Employee){
      return this.http.put(`${this.url}/${emp._id}`,emp)
    }

}




