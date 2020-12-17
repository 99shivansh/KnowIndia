import {Component, OnInit} from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import{AuthService} from '../services/auth.service';
export interface State {
  flag: string;
  name: string;
  population: string;
}
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})

export class SearchbarComponent implements OnInit  {
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

  onLoginSubmit(){
const city=this.stateCtrl.value; 
console.log(city);
  }
  stateCtrl = new FormControl();
  filteredStates: Observable<State[]>;

  states: State[] = 
  [
    {
      name: 'Rajasthan',
      population: '',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag: ''
    },
    {
      name: '',
      population: '',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag: ''
    },
    {
      name: '',
      population: '',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag: ''
    }
    
  ];
  
  constructor(private authService:AuthService) {
    this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.states.slice())
      );
  }

  private _filterStates(value: string): State[] {
    const filterValue = value.toLowerCase();

    return this.states.filter(state => state.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
