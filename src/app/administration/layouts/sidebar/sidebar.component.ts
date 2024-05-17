import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/@core/AuthService/token-storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  role: any;
  sideBarColor: any;
  customSidebarBg="red";
  themeColors: any;
  link = `${environment.reportsAPI}/api/v1/dynamic/css/customcss.json`
  authorized = true;
  constructor(
    private tokenStorage: TokenStorageService,
    private tokenService: TokenStorageService
  ) {
    this.themeColors = this.tokenStorage.getTheme();
    if(this.themeColors != null) {
      console.log("log in sidebar");
      console.log(this.themeColors);
      this.customSidebarBg = this.themeColors.customSidebarBg;
      console.log(this.customSidebarBg);
    }
  }

  username: any;
  email: any;
  ngOnInit() {
    this.Authorize();
  }

  Authorize() {
    let currentUser = this.tokenService.getUser();
    this.role = currentUser.roles[0].name;
    this.username = currentUser.username
    this.email = currentUser.email

    if (this.role == "SUPERUSER") {
      this.authorized = true;
    }

    if (this.role == "TELLER") {
      this.authorized = false;
    }
    if (this.role == "USER") {
      this.authorized = false;
    }
  }
}
