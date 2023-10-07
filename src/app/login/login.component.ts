import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  x:number = 100  //send this x to html 
  loading : boolean = false 
  email : string ="" 
  password :string ="" 
  data : any = {} 

  name ="RoyaL"
  fullName = "rama bhai patel"
  today = new Date()
  amount= 150000
  number = 2563.12345





  constructor(private httpClient:HttpClient,private toastr:ToastrService,private router:Router){
   
  }

  login(){
    console.log("email =>",this.email);
    console.log("password =>",this.password);
    let data = {
      "email":this.email,
      "password":this.password
    }

    this.loading=true 
    this.httpClient.post("https://demopass.onrender.com/public/login",data).subscribe(resp=>{
     this.data = resp  
     this.loading = false; 
    if(this.data.rcode== -9){
      this.toastr.error(this.data.msg,"",{timeOut:3000})
    }else if(this.data.rcode == 200){
      this.toastr.success("Login done","",{timeOut:3000})
      //storage -> localstorage 
      localStorage.setItem("loggedIn","true");

      this.router.navigateByUrl("/home")
    }
    },err=>{

      this.loading = false; 
    })
  }
}
 