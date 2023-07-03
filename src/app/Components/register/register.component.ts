import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../Services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  constructor(private AuthService:AuthService){}
  registerForm!: FormGroup;
 
  ngOnInit() {
    this.registerForm = new FormGroup({
      first_name: new FormControl("", Validators.required),
      last_name: new FormControl("",Validators.required),
      email: new FormControl("", Validators.required),
      password: new FormControl("",Validators.required),
      age: new FormControl("",Validators.required)
      
    })
  }
  get formControlles(){
    return this.registerForm.controls;
  }
  getFirstNameErrorMessage(){
    return this.registerForm.controls['first_name'].hasError('required')? 'You must enter a value': '';
  }
  getLastNameErrorMessage(){
    return this.registerForm.controls['last_name'].hasError('required')? 'You must enter a value': '';
  }
  getEmailErrorMessage(){
    return this.registerForm.controls['email'].hasError('required')? 'You must enter a value': '';
  }
  getPasswordErrorMessage(){
    return this.registerForm.controls['password'].hasError('required')? 'You must enter a value': '';
  }
  getAgeErrorMessage(){
    return this.registerForm.controls['age'].hasError('required')? 'You must enter a value': '';
  }

  submit(data:FormGroup){
    console.log(data.value);
    this.AuthService.register(data.value).subscribe({
     next:(res:any)=>{
      console.log(res);

     }
    })
  }

  clearAll(){
    this.registerForm.reset();
  }
}
