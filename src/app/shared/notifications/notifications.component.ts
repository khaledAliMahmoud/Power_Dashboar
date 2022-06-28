import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  active:string = "operation" ;
  activeIcon:string = "Icon1";
  activeBarLink:string = "sales";

  constructor() { }

  activeBtn(data){
    this.active = data
  }

  IconBtn(data){
    this.activeIcon = data
  }

  linkBar(data){
    this.activeBarLink = data
  }

  ngOnInit(): void {
  }

}
