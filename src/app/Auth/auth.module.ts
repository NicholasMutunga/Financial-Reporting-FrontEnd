import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ErrorInterceptor } from 'src/@core/helpers/error.interceptor';
import { MaterialModule } from '../material.module';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { LoginComponent } from './login/login.component';
import { NewPasswordComponent } from './new-password/new-password.component';
import { OtpComponent } from './otp/otp.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PassowrdResetComponent } from './passowrd-reset/passowrd-reset.component';
import { PageError404Component } from './page-error404/page-error404.component';
import { PageError500Component } from './page-error500/page-error500.component';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    ResetPasswordComponent,
    NewPasswordComponent,
    AuthenticatedComponent,
    PassowrdResetComponent,
    PageError500Component,
    PageError404Component,
    OtpComponent],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    AuthRoutingModule,

  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
],
})
export class AuthModule { }
