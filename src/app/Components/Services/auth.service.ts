import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from './../../../environment/environment';
import jwt_decode from "jwt-decode";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userData = new BehaviorSubject(null)
  constructor(private HttpClient:HttpClient , private Router:Router) { 
    // this.userDataShow()
  }

  register(data:any): Observable<any>{
      return this.HttpClient.post(environment.BASEURL+'signup',data)
  }
  login(data:any): Observable<any>{
    return this.HttpClient.post(environment.BASEURL+'signin',data)
  }

  userDataShow(){
    let encode:any = localStorage.getItem("userToken");
    let decode:any = jwt_decode(encode)
    // console.log(decode );
    this.userData.next(decode)
  }

  logout(){
    localStorage.removeItem('userToken')
    this.userData.next(null);
    this.Router.navigate(['/login'])
  }
  
}
