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
    this.toastr.success("Signup Done","",{timeOut:3000})
    this.router.navigateByUrl("/login")
    
  }
}
