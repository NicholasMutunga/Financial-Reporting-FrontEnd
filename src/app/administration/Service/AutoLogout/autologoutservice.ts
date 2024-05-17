
import { Router } from '@angular/router';
import { Injectable, NgZone } from '@angular/core';
import * as store from 'store';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { AuthService } from 'src/@core/AuthService/auth.service';

const MINUTES_UNITL_AUTO_LOGOUT = 30 // in Minutes
const CHECK_INTERVAL = 6000 // in ms
const STORE_KEY = 'lastAction';

@Injectable()
export class AutoLogoutService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(
    private auth: AuthService,
    private _snackBar: MatSnackBar,
    private router: Router,
    private ngZone: NgZone
  ) {
    this.check();
    this.initListener();
    this.initInterval();
  }
 
  get lastAction() {
      const storedValue = store.get(STORE_KEY);
      return isNaN(storedValue) ? 0 : parseInt(storedValue);
    }
  
  set lastAction(value) {
    store.set(STORE_KEY, value);
  }

  initListener() {
    store.set(STORE_KEY, Date.now());

    this.ngZone.runOutsideAngular(() => {
      document.body.addEventListener('click', () => this.reset());
    });
  }

  initInterval() {
    this.ngZone.runOutsideAngular(() => {
      setInterval(() => {
        this.check();
      }, CHECK_INTERVAL);
    })
  }

  reset() {
    this.lastAction = Date.now();
  }

  check() {
    const now = Date.now();       // The current time
    const timeleft = MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;      // The constant number of seconds remaining
    const logOutTime = this.lastAction + timeleft;      // When the system should log itself out

    const diff = logOutTime - now;
    let isTimeout: boolean = false;

    if(logOutTime > now) {
      console.log("NOT YET");
      isTimeout = false;
    } else {
      console.log("Time is here");
      isTimeout = true;
      
      this._snackBar.open('The system will sign you out after ' + MINUTES_UNITL_AUTO_LOGOUT + ' ' + 'Min of Inactivity', 'X', {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: 5000000,
        panelClass: ['red-snackbar', 'login-snackbar'],
      });
          
      // clear token
      // remove user from local storage to log user out
      sessionStorage.removeItem('currentUser');
      window.sessionStorage.clear();
      this.router.navigate(['/']);
    }
  }
}
