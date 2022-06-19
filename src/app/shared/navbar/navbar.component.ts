import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  date3: Date = new Date;

  today:boolean = false;
  yesterdy:boolean = false;
  week:boolean = false;
  constructor() {}

todayBtn(){
  this.today = true
}

yesterdyBtn(){
  this.yesterdy = true
}

weekBtn(){
  this.week = true
}

  ngOnInit(): void {}
}
