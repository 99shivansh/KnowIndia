import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import{Router}from'@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String;
  password:String;
  constructor(private authService:AuthService
    ,private router:Router
    ,private flashMessage:FlashMessagesService
    ) { }

  ngOnInit(): void {

  }

  onLoginSubmit(){
    const user={
      username:this.username,
      password:this.password
    }
    this.authService.authenticateUser(user).subscribe(data=>{
        if(data.body['success']){console.log(data.body);
         this.authService.storeUserData(data.body['token'],data.body['user']);
         this.flashMessage.show('You are now logged In',{cssClass:'alert-success',timout:5000});
          this.router.navigate(['dashboard']);
        }
        else{
          this.flashMessage.show(data.body['msg'],{cssClass:'alert-danger',timout:5000});console.log(data.body);
          this.router.navigate(['login']);
        }
      });
  }
  


}
