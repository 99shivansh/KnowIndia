import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MaterialModule} from './material/material.module'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

import {ValidateService}from './services/validate.service';
import {AuthService}from './services/auth.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import {AuthGaurd} from './gaurds/auth.gaurd';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CityComponent } from './city/city.component';
import { CitydetailsComponent } from './citydetails/citydetails.component';
import { CitycardComponent } from './citycard/citycard.component';
import { EditcitiesComponent } from './editcities/editcities.component';
import { EditcitiesdetailsComponent } from './editcitiesdetails/editcitiesdetails.component';
import { DeletecityComponent } from './deletecity/deletecity.component';
import { AddcitiesComponent } from './addcities/addcities.component';

const appRoutes: Routes=[
  {path:'',component:HomeComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthGaurd]},
  {path:'profile',component:ProfileComponent,canActivate:[AuthGaurd]},
  {path:'city',component:CityComponent,canActivate:[AuthGaurd]},
  {path:'citydetails',component:CitydetailsComponent,canActivate:[AuthGaurd]},
  {path:'editcity',component:EditcitiesComponent ,canActivate:[AuthGaurd]},
  {path:'editcitydetails',component:EditcitiesdetailsComponent,canActivate:[AuthGaurd]},
  {path:'deletecity',component:DeletecityComponent,canActivate:[AuthGaurd]},
  {path:'addcities',component:AddcitiesComponent,canActivate:[AuthGaurd]},
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    SearchbarComponent,
    CityComponent,
    CitydetailsComponent,
    CitycardComponent,
    EditcitiesComponent,
    EditcitiesdetailsComponent,
    DeletecityComponent,
    AddcitiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
     ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule
    ,MDBBootstrapModule.forRoot(),
  ],
  providers: [ValidateService,AuthService,AuthGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
