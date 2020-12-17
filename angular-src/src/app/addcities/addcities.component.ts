import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import{AuthService} from '../services/auth.service';
import {FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-addcities',
  templateUrl: './addcities.component.html',
  styleUrls: ['./addcities.component.css']
})
export class AddcitiesComponent implements OnInit {
imgloc="";
  constructor(private authService:AuthService
    ,private router:Router,
    private formBuilder:FormBuilder,
    private cd: ChangeDetectorRef,
    )
     { }

  ngOnInit(): void {
    this.updatedata = this.formBuilder.group({
      
      cityname: [null],
      citydesc: [null],
      citydesc2:[null],
      img1: [null]
      });
  }
  imagedata: FormGroup = this.formBuilder.group({
   
    image: ['', Validators.required], //making the image required here
    
  })
  updatedata:FormGroup;
  cityname="";
  citydesc="";
  img1="";
 citydesc2="";
  public cityname2;
  public citydesc22;
  public citydisc2;
  public img12;
  
  citynamed= new FormControl();
  citydescd=new FormControl();
  citydescd2=new FormControl();
  img1d=new FormControl();
  img1dd=new FormControl();

  onFileChange(event, field) {
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      // just checking if it is an image, ignore if you want
      if (!file.type.startsWith('image')) {
        this.updatedata.get(field).setErrors({
          required: true
        });
        this.cd.markForCheck();
      } else {
        // unlike most tutorials, i am using the actual Blob/file object instead of the data-url
        this.updatedata.patchValue({
          [field]: file
        });
        // need to run CD since file load runs outside of zone
        this.cd.markForCheck();
      }
    }
    const file = (event.target as HTMLInputElement).files[0];
    this.imagedata.patchValue({
      image: file
    });
    this.imagedata.get('image').updateValueAndValidity()
  }
  uploadimage()
  {
    const formData = new FormData();
    Object.entries(this.imagedata.value).forEach(
      ([key, value]: any[]) => {
        formData.set(key, value);
      });
      
 //console.log(formData);
 this.authService.uploadimage(formData).subscribe(res => {
   let allcitydata = {} as any;
   allcitydata = res
  //console.log(allcitydata.filename);

  this.img1=this.imgloc+ allcitydata.filename;
  
},err=>{
  console.log(err);
  return false;
});

  }

 addcity()
 {
    console.log(this.img1dd);
    this.cityname2=this.citynamed.value;
  this.citydesc22=this.citydescd.value;
  this.citydisc2=this.citydescd2.value;
  this.img12=this.img1;
  //console.log(this.cityname2,this.citydesc2,this.img12);
  this.updatedata.setValue({
    
    cityname:this.cityname2,
    citydesc:this.citydesc22,
    citydesc2:this.citydisc2,
    img1:this.img12
  });
  console.log("updatedata",this.updatedata.value);
  let Form = JSON.stringify(this.updatedata.value);
  this.authService.addnewcity(Form).subscribe(res => {
    // let allcitydata = {} as any;
    // allcitydata = res
    //console.log("working api");
    
  },err=>{
    console.log(err);
    return false;
  });
  this.router.navigate(['city']);
  }
  
  

  }


