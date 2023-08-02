import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  email = ""
  firstName = ""
  password = ""

  constructor(private toastr: ToastrService,private router:Router,private httpClient:HttpClient) {}

  signup(){
    console.log(this.firstName+" "+this.email+" "+this.password);

    //db save -> api 
   let data ={
      "email":this.email ,
      "firstName":this.firstName,
      "password":this.password
   }

    this.httpClient.post("https://demopass.onrender.com/signup",data).subscribe(resp=>{
      console.log(resp);
      
    },error=>{
      console.log(error);
      
    })
    this.toastr.success("Signup Done","",{timeOut:3000})
    this.router.navigateByUrl("/login")
    
  }
}
