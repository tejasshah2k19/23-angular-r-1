import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ReactiveSignupComponent } from './reactive-signup/reactive-signup.component';
import  {  LoginCheckGuard }   from './login-check.guard';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {path:"signup",component:SignupComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
  {path:"home",component:HomeComponent,canActivate:[LoginCheckGuard]},
  {path:"users",component:ListUsersComponent},
  {path:"edituser/:userId",component:EditUserComponent} ,
  {path:"signup2",component:ReactiveSignupComponent},
  {path:"logout",component:LogoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
