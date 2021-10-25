import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ViewuploadComponent } from './viewupload/viewupload.component';
import { ViewdwnldComponent } from './viewdwnld/viewdwnld.component';
import { NgFileValidatorLibModule } from 'angular-file-validator';

@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserRegisterComponent,
    UserDashboardComponent,
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminRegisterComponent,
    HomePageComponent,
    ViewuploadComponent,
    ViewdwnldComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgFileValidatorLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
