import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from 'src/@core/AuthService/auth.service';
import { TokenStorageService } from 'src/@core/AuthService/token-storage.service';
import { NotificationService } from 'src/@core/helpers/NotificationService/notification.service';
import { ReportsService } from 'src/app/administration/Service/reports/reports.service';
import { environment } from 'src/environments/environment';
import { PassowrdResetComponent } from '../passowrd-reset/passowrd-reset.component';
// import { AutoLogoutService } from '../../administration/Service/AutoLogout/auto-logout.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
  hide = true;
  loading = false;
  submitted = false;
  error = '';
  logolink: string = `${environment.reportsAPI}/api/v1/dynamic/saccologo`;
  message: any;
  loginResults: any;
  dialogConfig: any;
  destroy$: Subject<boolean> = new Subject<boolean>();
  // autoLogOut: AutoLogoutService; 

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private dialog: MatDialog,
    private authService: AuthService,
    private reportsService: ReportsService,
    private tokenStorage: TokenStorageService,
    private notificationAPI: NotificationService,
    // private autoLogOutService: AutoLogoutService

  ) {
      // this.autoLogOut = autoLogOutService; // Assign it to autoLogOut

  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
  ngOnInit() {
    sessionStorage.clear();
    localStorage.clear();
    this.loadSaccoDetails();
    this.loadSaccoThemes();
  }
  loginForm: FormGroup = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  removeUser() {
    localStorage.removeItem('currentUser');
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  get f() {
    return this.loginForm.controls;
  }
  loadSaccoDetails() {
    this.reportsService.sacconame().subscribe(
      (res) => {
        if (res.statusCode == 302) {
          this.tokenStorage.saveSaccoName(res.entity);
        }
      }
    )
  }
  loadSaccoThemes() {
    this.reportsService.saccotheme().subscribe (
      (res) => {
        if(res.statusCode == 200) {
          this.tokenStorage.saveTheme(res.entity);
        }
      },
    )
  }
  onResetPass(useremail: any) {
    this.dialogConfig = new MatDialogConfig();
    this.dialogConfig.disableClose = true;
    this.dialogConfig.autoFocus = true;
    this.dialogConfig.width = "30%";
    this.dialogConfig.data = useremail;
    const dialogRef = this.dialog.open(PassowrdResetComponent, this.dialogConfig);
    dialogRef.afterClosed().pipe(takeUntil(this.destroy$)).subscribe(
      {
        next: (
          (res) => {
            if (res.statusCode === 200) {
              this.loading = false;
              this.router.navigate([`/system`], {
                skipLocationChange: true
              });
            } else {
              this.loading = false;
              this.notificationAPI.alertWarning("Passowrd must be be updated!!");
            }
          }
        ),
        error: (
          (err) => {
            this.loading = false;
            this.notificationAPI.alertWarning("Server Error: !!");
          }
        ),
        complete: (
          () => {

          }
        )
      }
    ), Subscription
  }

  onSubmit(): void {
    this.loading = false;
    this.authService.singin(this.loginForm.value).subscribe(
      {
        next: (
          (res) => {
            if (res.statusCode === 200) {
              this.loading = false;
              this.loginResults = res.entity;
              console.log("login results", this.loginResults);
              if (this.loginResults.otpEnabled === true) {
                this.notificationAPI.alertSuccess(res.message);
                this.router.navigate([`/sso/otp`], {
                  skipLocationChange: true, queryParams: { formData: this.loginForm.value, fetchData: this.loginResults }
                });
              }
              if (this.loginResults.otpEnabled === false) {
                this.tokenStorage.saveToken(this.loginResults.accessToken);
                this.tokenStorage.saveUser(this.loginResults);
                // if (this.loginResults.isSystemGenPassword == 'Y') {
                //   this.loading = false;
                //   this.onResetPass(this.loginResults.email);
                // }
                // else {
                  this.loading = false;
                  this.notificationAPI.alertSuccess("Welcome " + this.loginResults.username + ", You are Fully Authenticated.");
                  this.router.navigate([`/system`]);
                // }
              }
            }
            else {
              this.loading = false;
              this.notificationAPI.alertWarning(res.message);
            }
          }
        ),
        error: (
          (err) => {
            this.loading = false;
            this.notificationAPI.alertWarning(
              err.error.error + ' Check your Credentials, or use Forgot Password'
            );
          }
        ),
        complete: (
          () => {

          }
        )
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }
}
