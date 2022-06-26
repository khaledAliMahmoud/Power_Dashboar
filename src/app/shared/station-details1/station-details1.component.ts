import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-details1',
  templateUrl: './station-details1.component.html',
  styleUrls: ['./station-details1.component.scss'],
})
export class StationDetails1Component implements OnInit{

  active:string = "finance" ;
  activeIcon:string = "Icon1";
  activeBarLink:string = "TEMORETURE";

  public canvasWidth
  public needleValue
  public centralLabel
  public label
  public bottomLabel
  public options

    ngOnInit(){
      this.canvasWidth = 300
      this.needleValue = 65
      this.centralLabel = ''
      this.bottomLabel = '65'
      this.options = {
      hasNeedle: false,
      needleColor: 'gray',
      needleUpdateSpeed: 1000,
      arcColors: ['yellow', 'lightgray'],
      arcDelimiters: [70],
      rangeLabel: ['0', '100'],

    }
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
