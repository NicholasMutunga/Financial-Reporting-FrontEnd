import { Component, HostListener, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/@core/AuthService/token-storage.service';
import { ReportsService } from './Service/reports/reports.service';
import { AutoLogoutService } from './Service/AutoLogout/auto-logout.service';

@Component({
  selector: 'app-administration',
  templateUrl: './administration.component.html',
  styleUrls: ['./administration.component.scss']
})
export class AdministrationComponent implements OnInit {
  title = 'EMT_001_SACCO_SOLUTION';
  elem: any;
  customSidebarBg="red"
  themeColors: any;
  sideBarOpen = true;
  autoLogOut: AutoLogoutService; 
  
  constructor(
    private tokenStorage: TokenStorageService,
    private reportsService: ReportsService,
    private autoLogOutService: AutoLogoutService
    ) {
      this.settheme();
      this.loadSaccoThemes();
      this.autoLogOut = autoLogOutService; // Assign it to autoLogOut
    }

  ngOnInit(): void {
     this.elem = document.documentElement;
  }

  settheme(){
    this.themeColors = this.tokenStorage.getTheme();
    if(this.themeColors) {
      this.customSidebarBg = this.themeColors.customSidebarBg;
    }
  }

  sideBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
  
  @HostListener('document:fullscreenchange', ['$event'])
  @HostListener('document:webkitfullscreenchange', ['$event'])
  @HostListener('document:mozfullscreenchange', ['$event'])
  @HostListener('document:MSFullscreenChange', ['$event'])

 openFullscreen() {
   if (this.elem.requestFullscreen) {
     this.elem.exitFullscreen();
   } else if (this.elem.mozRequestFullScreen) {
     /* Firefox */
     this.elem.mozRequestFullScreen();
   } else if (this.elem.webkitRequestFullscreen) {
     /* Chrome, Safari and Opera */
     this.elem.webkitRequestFullscreen();
   } else if (this.elem.msRequestFullscreen) {
     /* IE/Edge */
     this.elem.msRequestFullscreen();
   }
 }
 loadSaccoThemes() {
  this.reportsService.saccotheme().subscribe (
    (res) => {
      if(res.statusCode == 200) {
        this.tokenStorage.saveTheme(res.entity);
        this.settheme();
      }
    },
  )
}
}
