import { PageError404Component } from './Auth/page-error404/page-error404.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanLoadModuleGuard } from 'src/@core/helpers/CanLoadModule.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './Auth/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
        pathMatch: 'full'
      },
      {
        path: 'sso',
        loadChildren: () => import('./Auth/auth.module').then(m => m.AuthModule)
      },
      {
        path: 'system',
        loadChildren: () => import('./administration/administration.module').then(m => m.AdministrationModule),
        canLoad: [CanLoadModuleGuard],
        data: { preload: false }
      }
    ]
  },
  { path: "**", component: PageError404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
