import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable }from '@angular/core'  

@Injectable()
export class LoginCheckGuard implements CanActivate{

  constructor(private router:Router){

  }
  canActivate( route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){

      let loggedIn = localStorage.getItem("loggedIn")

      if(loggedIn == undefined){
        alert("Please do login")
        this.router.navigateByUrl("/login")
        return false;
      }
      return true;
  }
}  

 