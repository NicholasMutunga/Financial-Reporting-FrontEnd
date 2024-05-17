import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter } from "rxjs/operators";
import { AuthService } from 'src/@core/AuthService/auth.service';
import { TokenStorageService } from 'src/@core/AuthService/token-storage.service';
import { User } from 'src/@core/Models/user/user.model';
import { environment } from 'src/environments/environment';
import { ReportsService } from '../administration/Service/reports/reports.service';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, OnDestroy {
  currentUser: User = new User;
  authimage: string = `${environment.reportsAPI}/api/v1/dynamic/authimage`;
  destroy$: Subject<boolean> = new Subject<boolean>();
  constructor(
    private router: Router,
    private authService: AuthService,
    private tokenStorage: TokenStorageService,
    private reportsService: ReportsService,
  ) {
    this.loadSaccoThemes();
    this.authService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(() => window.scrollTo(0, 0));
  }

  loadSaccoThemes() {
    this.reportsService.saccotheme().subscribe(
      (res) => {
        if (res.statusCode == 200) {
          this.tokenStorage.saveTheme(res.entity);
        }
      },
    )
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/Auth/login']);
  }
}
