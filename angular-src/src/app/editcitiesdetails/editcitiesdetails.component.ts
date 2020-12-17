import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import{AuthService} from '../services/auth.service';
import {FormControl, ReactiveFormsModule, FormGroupDirective, FormBuilder, FormGroup, NgForm,Validators} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-editcitiesdetails',
  templateUrl: './editcitiesdetails.component.html',
  styleUrls: ['./editcitiesdetails.component.css']
})
export class EditcitiesdetailsComponent implements OnInit {
  imgloc="";
  constructor(private authService:AuthService
    ,private router:Router,
    private formBuilder:FormBuilder,
    private cd: ChangeDetectorRef,
    )
     { }

  ngOnInit(): void {
        this.cityid2=this.authService.citysessiond;
    //console.log('editdetailsworking',this.cityid2);
  

    this.cityid2=this.authService.citysessiond;
    this.authService.getcitydatabyid(this.cityid2).subscribe(res => {
      let allcitydata = {} as any;
      allcitydata = res
      //console.log('working',allcitydata);
       this.cityname1=allcitydata.cityname;
       this.citydesc1=allcitydata.citydesc;
       this.citydesc2=allcitydata.citydesc2;
       this.img11=allcitydata.img1;
       this.img2=allcitydata.img2;
       console.log('working',this.cityname1);
       console.log('working',this.citydesc1);
       console.log('working',this.img11);
       console.log('working',this.img2);
    },err=>{
      console.log(err);
      return false;
    });
    this.updatedata = this.formBuilder.group({
      cityid:[null],
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
  public cityid2;
public cityname1;
public citydesc1;
public img11;
public img2;
  citynamed= new FormControl();
  citydescd=new FormControl();
  citydescd2=new FormControl();
  img1d=new FormControl();
  img1dd=new FormControl();
  cityid=new FormControl();
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
    cityid:this.cityid2,
    cityname:this.cityname2,
    citydesc:this.citydesc22,
    citydesc2:this.citydisc2,
    img1:this.img12
  });
  console.log("updatedata",this.updatedata.value);
  let Form = JSON.stringify(this.updatedata.value);
  this.authService.updatecitydatabyid(Form).subscribe(res => {
    // let allcitydata = {} as any;
    // allcitydata = res
    //console.log("working api");
    
  },err=>{
    console.log(err);
    return false;
  });
  this.router.navigate(['editcity']);
  }
  
  

  }

//   //scs
//   constructor(private authService:AuthService
//     ,private router:Router,private formBuilder:FormBuilder) { }

//   ngOnInit(): void {
//     this.cityid2=this.authService.citysessiond;
//     //console.log('editdetailsworking',this.cityid2);
  

//     this.cityid2=this.authService.citysessiond;
//     this.authService.getcitydatabyid(this.cityid2).subscribe(res => {
//       let allcitydata = {} as any;
//       allcitydata = res
//       //console.log('working',allcitydata);
//        this.cityname1=allcitydata.cityname;
//        this.citydesc1=allcitydata.citydesc;
//        this.img11=allcitydata.img1;
//        this.img2=allcitydata.img2;
//        console.log('working',this.cityname1);
//        console.log('working',this.citydesc1);
//        console.log('working',this.img11);
//        console.log('working',this.img2);
//     },err=>{
//       console.log(err);
//       return false;
//     });
//     // this.updatedata=this.formBuilder.group({
//     // this.cityname:[]

//     // });
//     this.updatedata = this.formBuilder.group({
//       cityid:[null],
//       cityname: [null],
//       citydesc: [null],
//       img1: [null]
//       });
//   }
// updatedata:FormGroup;
// cityname="";
// citydesc="";
// img1="";


// public cityid2;
// public cityname1;public cityname2;
// public citydesc1;public citydesc2;
// public img11;public img12;
// public img2;
//  citynamed= new FormControl();
//  citydescd=new FormControl();
//  img1d=new FormControl();
//  cityid=new FormControl();
// onupdate()
// {
//   console.log("button working");
//   this.cityname2=this.citynamed.value;
//   this.citydesc2=this.citydescd.value;
//   this.img12=this.img1d.value;
//   this.updatedata.setValue({
//     cityid:this.cityid2,
//     cityname:this.cityname2,
//     citydesc:this.citydesc2,
//     img1:this.img12
//   });

//   console.log("updatedata",this.updatedata.value);
//   let Form = JSON.stringify(this.updatedata.value);
//   this.authService.updatecitydatabyid(Form).subscribe(res => {
//     // let allcitydata = {} as any;
//     // allcitydata = res
//     console.log("working api");
//   },err=>{
//     console.log(err);
//     return false;
//   });
//  // console.log("buttontest",this.cityname2);
//   //console.log("buttontest",this.citydesc2);
//   //console.log("buttontest",this.img12);
// }
// }
