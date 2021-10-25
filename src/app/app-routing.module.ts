import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ViewdwnldComponent } from './viewdwnld/viewdwnld.component';
import { ViewuploadComponent } from './viewupload/viewupload.component';

const routes: Routes = [
  {
    path:'',component:HomePageComponent
  },
  {
    path:'uregister',component:UserRegisterComponent
  },

  {
    path:'ulogin',component:UserLoginComponent
  },
  {
    path:'udashboard',component:UserDashboardComponent
  },
  {
    path:'aregister',component:AdminRegisterComponent
  },

  {
    path:'alogin',component:AdminLoginComponent
  },
  {
    path:'adashboard',component:AdminDashboardComponent
  },
  {
    path:'getPdf',component:ViewuploadComponent
  },
  {
    path:'dwnloads',component:ViewdwnldComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
