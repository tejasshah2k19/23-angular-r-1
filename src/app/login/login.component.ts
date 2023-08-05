import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  x:number = 100  //send this x to html 

  email : string ="" 
  password :string ="" 
  data : any = {} 


  constructor(private httpClient:HttpClient,private toastr:ToastrService){
   
  }

  login(){
    console.log("email =>",this.email);
    console.log("password =>",this.password);
    let data = {
      "email":this.email,
      "password":this.password
    }

  
    this.httpClient.post("https://demopass.onrender.com/public/login",data).subscribe(resp=>{
     this.data = resp  
    if(this.data.rcode== -9){
      this.toastr.error(this.data.msg,"",{timeOut:3000})
    }else if(this.data.rcode == 200){
      this.toastr.success("Login done","",{timeOut:3000})
    }
    },err=>{

    })
  }
}
 