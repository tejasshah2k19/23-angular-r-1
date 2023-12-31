import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';

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
    constructor(private userService:UserService,private toastr:ToastrService,private router:Router){
      this.getAllUsers()
    }

    getAllUsers(){
 
      console.log("List user api called...");
      this.userService.getAllUsers().subscribe(resp=>{
          this.apiResponse = resp 
        // console.log(apiResponse); // data msg code 
        // console.log(apiResponse.data);
          this.users=this.apiResponse.data 
        },err=>{

        })


    }

    deleteUser(userId:string){
      //alert("delete"+userId);
      this.userService.deleteUser(userId).subscribe(resp=>{
        this.getAllUsers();
      this.toastr.success("","User Removed",{timeOut:3000})
      })
    }
    viewUser(userId:string){
      //get user by id 
      
    }

    showDialog(userId:string){
      
      // console.log("hi");
      //   this.uId = userId
      //   this.httpClient.get("https://demopass.onrender.com/getuserbyid/"+userId).subscribe(resp=>{
      //     this.data = resp 
      //     this.firstName = this.data.data.firstName 
      //     this.email  = this.data.data.email 
      //     this.visible = true 
      //   })
    }
  
    editUser(userId:string){
      // alert(userId);
      this.router.navigateByUrl("/edituser/"+userId)
      //edituser/h45kih654kjh645k6
    }
  
  
  }
