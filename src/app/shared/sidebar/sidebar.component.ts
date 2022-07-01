import { LoggedoutService } from './../../loggedout.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private _LoggedoutService:LoggedoutService) { }


  ngOnInit(): void {
  }

  logOutBtn(){
    // this._LoggedoutService.loggedOut = true
    localStorage.clear()
  }

}
