import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

    apiResponse:any = {}
    users:Array<any>=[]
    firstName = ""
    email  = ""
    data:any = {}
    uId = ""
    visible:boolean=false 
    constructor(private httpClient:HttpClient,private toastr:ToastrService){
      this.getAllUsers()
    }

    getAllUsers(){
 
      console.log("List user api called...");
      
        this.httpClient.get("https://demopass.onrender.com/getallusers").subscribe(resp=>{
          this.apiResponse = resp 
        // console.log(apiResponse); // data msg code 
        // console.log(apiResponse.data);
          this.users=this.apiResponse.data 
        },err=>{

        })
    }

    deleteUser(userId:string){
      //alert("delete"+userId);
      this.httpClient.delete("https://demopass.onrender.com/deleteuser/"+userId).subscribe(resp=>{
        this.getAllUsers();
      this.toastr.success("","User Removed",{timeOut:3000})
      })
    }
    viewUser(userId:string){
      //get user by id 
      
    }

    showDialog(userId:string){
      
      console.log("hi");
        this.uId = userId
        this.httpClient.get("https://demopass.onrender.com/getuserbyid/"+userId).subscribe(resp=>{
          this.data = resp 
          this.firstName = this.data.data.firstName 
          this.email  = this.data.data.email 
          this.visible = true 
        })
    }
  }
