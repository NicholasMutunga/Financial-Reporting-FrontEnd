import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStoreService } from './data-store.service';
import { NotificationService } from './NotificationService/notification.service';

@Injectable({ providedIn: 'root' })
export class CanActivateModuleGuard implements CanActivate {
  compPermision: any;
  permission: Set<string>;
  actionPermission: Set<String>;
  constructor(
    private notificationAPI: NotificationService,
    private dataStoreService: DataStoreService
  ) {}
  // ACCOUNTS
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.compPermision = route.data;
    this.permission = this.dataStoreService.getPriviledges();
    if (this.permission.has(this.compPermision.permission)) {
      return true;
    }else {
      this.notificationAPI.alertWarning('Unauthorized!');
      return false;
    }
  }
}
