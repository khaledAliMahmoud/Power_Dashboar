import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  date3: Date = new Date;

  shot:string ;

  constructor() {}

activBtn(data){
  this.shot = data
}



  ngOnInit(): void {}
}
