import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router:Router){
    //localStorage.clear();//remove all items 
    localStorage.removeItem("loggedIn");
    this.router.navigateByUrl("/login")
  }
}
