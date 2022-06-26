import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-control-room',
  templateUrl: './control-room.component.html',
  styleUrls: ['./control-room.component.scss']
})
export class ControlRoomComponent implements OnInit {

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
