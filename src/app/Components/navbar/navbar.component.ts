import { Component, OnInit } from '@angular/core';
import { AuthService } from './../Services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
 isLogin :boolean = false;
 constructor( private AuthService:AuthService ){}
 ngOnInit(){
  this.AuthService.userData.subscribe({
    next:()=>{
    if ( this.AuthService.userData.getValue() !== null){
      this.isLogin= true;
    }else{
      this.isLogin= false;
    }
    }
  })
 }
 logout(){
  this.AuthService.logout()
 }
}
