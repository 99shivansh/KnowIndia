import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpResponse  } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
authToken:any;
user:any;
citysessiond:any;
 private url= 'https://knowindiabackend.onrender.com/';
  constructor(private http:HttpClient) { }
  isadmin()
    {
     if(this.user.username=='admin'||this.user.username=='Admin'||this.user.username=='ADMIN')
     {
       return true;
     }
     else
     {
       return false;
     }

    }
  registerUser(user) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url +'user/register', user, {
      headers: headers,
      observe: 'response'
    }).pipe(map((res:HttpResponse<JSON>)=> res));
  }
  authenticateUser(user){
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.url +'user/authenticate', user, {
      headers: headers,
      observe: 'response'
    }).pipe(map((res:HttpResponse<JSON>)=> res));
  }
  storeUserData(token,user){
    localStorage.setItem('id_token',token);
    localStorage.setItem('user',JSON.stringify(user));
    this.authToken=token;
    this.user=user;
  }
  logout(){
    this.authToken=null;
    this.user=null;
    localStorage.clear();
  }
  getProfile( ){
    return this.user;
  }
  getallcitydata(){
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json'
      
    // });
    return this.http.get(this.url +'user/getallcitydata');
  }
  getcitydatabyid(cityid){
   
    return this.http.get(this.url +'user/getcitydata',{params: { id:cityid }}); 
    
    }
    updatecitydatabyid(bodyd)
    {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
     
      });
      return this.http.put(this.url +'user/updatecitydata',bodyd, {headers: headers}).pipe(map((res:HttpResponse<JSON>)=> res)); 
   
    }
    deletecitydatabyid(cityid){
   
      return this.http.delete(this.url +'user/deletecitydata',{params: { id:cityid }}); 
      
      }
      addnewcity(bodyd)
    {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
     
      });
      return this.http.post(this.url +'user/newcitydata',bodyd, {headers: headers}).pipe(map((res:HttpResponse<JSON>)=> res)); 
   
    }
    uploadimage(bodyd)
    {
      let headers = new HttpHeaders({
        'Content-Type': 'application/json',
     
      });
      return this.http.post(this.url +'user/upload',bodyd).pipe(map((res:HttpResponse<JSON>)=> res)); 
   
    }
  citysession(cityid){
     this.citysessiond=cityid;
     console.log("cityid",this.citysessiond);
    
  }
  loadToken(){
    const token=localStorage.getItem('id_token');
    this.authToken=token;
  }
  loggedIn(){
    if(this.authToken != null){return true;}
    else{return false;}
  }
}
