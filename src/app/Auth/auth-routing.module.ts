import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { OtpComponent } from './otp/otp.component';
//import { LUCYDAASHComponent } from '../lucydaash/lucydaash.component';


const routes: Routes = [{
  path: '',
  component: AuthComponent,
  children: [
    {
      path: '',
      component: LoginComponent,
    },
    {
      path: 'login',
      component: LoginComponent,
    },
    {
      path: 'otp',
      component: OtpComponent,
    },
    {
      path: 'Authenticated',
      component: AuthenticatedComponent,
    },
    {
      path: 'reset_password',
      component: ResetPasswordComponent,
    },
    {
      path: 'set_new_password/token/:{token}',
      component: NewPasswordComponent,
    },
    /*{
      path: 'lucydaash',
      component: LUCYDAASHComponent,
    } */
    
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
