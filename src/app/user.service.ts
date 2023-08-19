import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient:HttpClient) {


   }

   addUser(){

   }
   deleteUser(userId:string):Observable<any>{
    return this.httpClient.delete("https://demopass.onrender.com/deleteuser/"+userId)
   }
   
   getUserById(userId:string):Observable<any>{
    return this.httpClient.get("https://demopass.onrender.com/getuserbyid/"+userId)
   }  

   getAllUsers():Observable<any>{
       return this.httpClient.get("https://demopass.onrender.com/getallusers")
   }
    
  }
 
