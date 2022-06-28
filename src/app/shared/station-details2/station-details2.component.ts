import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-details2',
  templateUrl: './station-details2.component.html',
  styleUrls: ['./station-details2.component.scss']
})
export class StationDetails2Component implements OnInit {

  activeIcon:string = "Icon2";
  activeBarLink:string = "Compressor";
  showStations:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  IconBtn(data){
    this.activeIcon = data;
  }

  linkBar(data){
    this.activeBarLink = data;

    if(this.activeBarLink == "Compressor"){
      this.showStations = false;
    }else{
      this.showStations = true;
    }

  }

}
