import { Component, OnInit } from '@angular/core';
import{AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-citydetails',
  templateUrl: './citydetails.component.html',
  styleUrls: ['./citydetails.component.css']
})
export class CitydetailsComponent implements OnInit {

  constructor(private authService:AuthService
    ,private router:Router) { }

  ngOnInit(): void {
    //console.log('something',this.authService.citysessiond);
    this.cityid2=this.authService.citysessiond;
    this.authService.getcitydatabyid(this.cityid2).subscribe(res => {
      let allcitydata = {} as any;
      allcitydata = res
      console.log('working',allcitydata);
       this.cityname=allcitydata.cityname;
       this.citydesc=allcitydata.citydesc;
       this.img1=allcitydata.img1;
       this.img2=allcitydata.img2;
       this.citydesc2=allcitydata.citydesc2;
       console.log('working',this.cityname);
       console.log('working',this.citydesc);
       console.log('working',this.citydesc2);
       console.log('working',this.img1);
       console.log('working',this.img2);
    },err=>{
      console.log(err);
      return false;
    });
  }
public cityid2;
public cityname;
public citydesc;
public citydesc2;
public img1;
public img2;

  
}
