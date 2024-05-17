import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Output, EventEmitter, Inject, HostListener } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AuthService } from 'src/@core/AuthService/auth.service';
import { TokenStorageService } from 'src/@core/AuthService/token-storage.service';
import { environment } from 'src/environments/environment';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  @Output() toggleSideBarForMe: EventEmitter<any> = new EventEmitter();
  elem: any;
  isFullScreen!: boolean;
  currentUser: any;
  message: any;
  sacconame: string;
  customTitlebarBg = "red"
  themeColors: any;
  logolink: string = `${environment.reportsAPI}/api/v1/dynamic/saccologo`;
  systemDate: any;
  totalTransactions = 0;
  data: any;
  totalRetailMembers = 0;
  totalGroupMembers = 0;
  results: any;
  submitted: boolean = false;
  destroy$: Subject<boolean> = new Subject<boolean>();
  transData: any;
  username: any;
  email: any;
  loading: boolean = false;
  totalAccounts=0;
  totalSalaries=0;

  constructor(
    private _snackBar: MatSnackBar,

    private router: Router,
    private authService: AuthService,
    @Inject(DOCUMENT) private document: any,
    private tokenStorage: TokenStorageService,

  ) {
    this.currentUser = JSON.parse(localStorage.getItem('auth-user'));

  }
  ngOnInit() {
    this.elem = document.documentElement;
    this.systemDate = new Date();
    this.sacconame = "Ticketing System";
    this.themeColors = this.tokenStorage.getTheme();
    if (this.themeColors) {
      this.customTitlebarBg = this.themeColors.customTitlebarBg;
    }
  }
  toggleSideBar() {
    this.toggleSideBarForMe.emit();
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
      );
    }, 300);
  }


  profile() {
    this.router.navigate([`/system/manage/user/profle/`], { skipLocationChange: true });
  }
  logout() {
    this.authService.signout(this.currentUser.id).subscribe(res => {
      this.message = res;
      if (this.message.statusCode == 200) {
        this.loading = false;
        this._snackBar.open("Logout Successful", "X", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['green-snackbar', 'login-snackbar'],
        });
        this.router.navigate(['/sso']);
      } else {
        this.loading = false;
        this._snackBar.open(this.message.message, "X", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: 3000,
          panelClass: ['red-snackbar', 'login-snackbar'],
        });
      }
      this.router.navigate(['/sso']);
    })
    this.router.navigate(['/sso']);
  }

  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])
  
  fullscreenmodes() {
    this.chkScreenMode();
  }
  
  chkScreenMode() {
    if (document.fullscreenElement) {
      //fullscreen
      this.isFullScreen = true;
    } else {
      //not in full screen
      this.isFullScreen = false;
    }
  }

  openFullscreen(event: MouseEvent) {
    event.preventDefault();
    
    if (this.elem.requestFullscreen) {
      this.elem.requestFullscreen();
    } else if (this.elem.mozRequestFullScreen) {
      // Firefox /
      this.elem.mozRequestFullScreen();
    } else if (this.elem.webkitRequestFullscreen) {
      // Chrome, Safari and Opera /
      this.elem.webkitRequestFullscreen();
    } else if (this.elem.msRequestFullscreen) {
      // IE/Edge /
      this.elem.msRequestFullscreen();
    }
  }

  // Close fullscreen /
  closeFullscreen() {
    if (this.document.exitFullscreen) {
      this.document.exitFullscreen();
    } else if (this.document.mozCancelFullScreen) {
      // Firefox /
      this.document.mozCancelFullScreen();
    } else if (this.document.webkitExitFullscreen) {
      // Chrome, Safari and Opera /
      this.document.webkitExitFullscreen();
    } else if (this.document.msExitFullscreen) {
      // IE/Edge /
      this.document.msExitFullscreen();
    }
  }
}
