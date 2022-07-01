import { NavigationStart, Router } from '@angular/router';
import { LoggedoutService } from './loggedout.service';
import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private primengConfig: PrimeNGConfig , private _Router:Router) {
   _Router.events.subscribe(Event => {
      if(Event instanceof NavigationStart) {
      this.pageUrl= Event.url;

      }

    })
  }
  title = 'dashBoard';
  userOut:boolean = false;
  pageUrl:string ;

  ngOnInit():void{

  }

}

