import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import{AuthService} from '../services/auth.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  ngOnInit() {
    this.authService.getallcitydata().subscribe(res => {
      let allcitydata = {} as any;
      allcitydata = res
      this.cityd=allcitydata;
      //this.l=this.cityd.length; 
  
      for(var i=0;i<this.cityd.length;i++)
      {
        this.cityname[i]=this.cityd[i].cityname;
        this.citydesc[i]=this.cityd[i].citydesc;
        this.img1[i]=this.cityd[i].img1;
        this.img2[i]=this.cityd[i].img2;
        this.id[i]=this.cityd[i]._id;
      }
      console.log(this.cityname);
      console.log(this.citydesc);
      console.log(this.img1);
      console.log(this.img2);
      console.log(this.id);
      //this.user = allcitydata.user;
      //console.log(this.user); 
    },err=>{
        console.log(err);
        return false;
    });
  }
   cityd ={} as any;
   public cityname=[]; 
   public citydesc=[];
   public img1=[];
   public img2=[];
   public id=[];

  // public users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];
  public users=this.cityname;
  dataSource = new MatTableDataSource(this.users);
  constructor(private authService:AuthService
    ,private router:Router) { }

  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onsubmit(value)
  {
    let tempid=this.id[value];
    this.authService.citysession(tempid);
   //console.log(value);
    this.router.navigate(['citydetails']);
    //this.authService.citysession(tempid);
  }

}
