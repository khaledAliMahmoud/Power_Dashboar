import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-details2',
  templateUrl: './station-details2.component.html',
  styleUrls: ['./station-details2.component.scss']
})
export class StationDetails2Component implements OnInit {

  active:string = "finance" ;
  activeIcon:string = "Icon1";
  activeBarLink:string = "Compressor";

  constructor() { }

  ngOnInit(): void {
  }

  activeBtn(data){
    this.active = data
  }

  IconBtn(data){
    this.activeIcon = data
  }

  linkBar(data){
    this.activeBarLink = data
  }

}
