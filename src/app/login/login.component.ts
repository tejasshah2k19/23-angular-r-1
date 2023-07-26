import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  x:number = 100  //send this x to html 

  email : string ="" 
  password :string ="" 

  login(){
    console.log("email =>",this.email);
    console.log("password =>",this.password);
  }
}
 