import { LoggedoutService } from './../../loggedout.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  constructor(private _Router:Router , private _LoggedoutService:LoggedoutService) { }

  loginForm:FormGroup = new FormGroup({

    user_name:new FormControl(null ,[Validators.required , Validators.minLength(3) , Validators.maxLength(10)]),
    password:new FormControl(null , [Validators.required , Validators.pattern(/^[A-Z][a-z]{3,6}/ )]),
  })

  loginBtn(data:FormGroup){
    console.log(data.value);
    localStorage.setItem('user' , JSON.stringify(data.value) )
    // this._LoggedoutService.loggedOut = false
    this._Router.navigate(['/home'])

  }

  ngOnInit(): void {
  }

}
