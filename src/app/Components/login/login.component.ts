import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './../Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  
  constructor(private AuthService:AuthService , private Router : Router ){}
  loginForm!: FormGroup;
  errorMassage:String = "";
  isLoading:boolean = false;  
  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl("", Validators.required),
      password: new FormControl("",Validators.required),
      
    })
  }
  get formControlles(){
    return this.loginForm.controls;
  }
  getEmailErrorMessage(){
    return this.loginForm.controls['email'].hasError('required')? 'You must enter a value': '';
  }
  getPasswordErrorMessage(){
    return this.loginForm.controls['password'].hasError('required')? 'You must enter a value': '';
  }

  submit(data:FormGroup){
    this.isLoading= true;
    // console.log(data.value);
    this.AuthService.login(data.value).subscribe({
     next:(res:any)=>{
      if(res.message==="success"){
        this.isLoading=false
        // console.log(res);
        this.Router.navigate([''])
        localStorage.setItem("userToken",res.token)
        this.AuthService.userDataShow()
      }else{
        this.isLoading=false
        this.errorMassage = res.message
        // console.log(this.errorMassage );
        alert(this.errorMassage)
      }
     }
    })
  }

  clearAll(){
    this.loginForm.reset();
  }
}
