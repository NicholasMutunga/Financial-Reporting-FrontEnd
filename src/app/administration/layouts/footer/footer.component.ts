import { Component, OnInit } from '@angular/core';
// import { AutoLogoutService } from '../pages/Service/AutoLogout/auto-logout.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  date = new Date();

  constructor() { 
  }

  currentDate = new Date().getFullYear();

  ngOnInit() {
  }

}
