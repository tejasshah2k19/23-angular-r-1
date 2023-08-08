import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent {

    apiResponse:any = {}
    users:Array<any>=[]
    constructor(private httpClient:HttpClient){
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
}
