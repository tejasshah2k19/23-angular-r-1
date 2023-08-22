import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-signup',
  templateUrl: './reactive-signup.component.html',
  styleUrls: ['./reactive-signup.component.css']
})
export class ReactiveSignupComponent {

 
  myForm :FormGroup 

  constructor(){
    this.myForm  = new FormGroup({
      firstName: new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      password:new FormControl("",Validators.required)
    })
  }

  saveUser(){
    console.log(this.myForm.value);
    console.log(this.myForm.valid);
    
    
  }
}
