import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {
  firstName  = ""
  email = ""
  userId = "" 
  data :any = {}
  constructor(private ar:ActivatedRoute,private httpClient:HttpClient,private router:Router,private toastr:ToastrService){
      this.userId = this.ar.snapshot.params["userId"]

      this.httpClient.get("https://demopass.onrender.com/getuserbyid/"+this.userId).subscribe(resp=>{
        this.data = resp 
          if(this.data.rcode == -9){
            //navigate 
            this.toastr.error("","Please TAG!!!",{timeOut:3000})
            this.router.navigateByUrl("/users")

          }else{ 
          
              this.firstName = this.data.data.firstName 
              this.email  = this.data.data.email 
          }
      })

       
    }

    updateUser(){
      // you have to 
      console.log(this.firstName);
      console.log(this.email);
      console.log(this.userId);
    }
  }
