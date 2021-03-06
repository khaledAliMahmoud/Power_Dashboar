import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-station-details1',
  templateUrl: './station-details1.component.html',
  styleUrls: ['./station-details1.component.scss'],
})
export class StationDetails1Component {
  active: string = 'finance';
  activeIcon: string = 'Icon1';
  activeBarLink: string = 'TEMORETURE';
  showKpi:boolean = false
  data: any;

  constructor() {
      this.data = {
          labels: [],
          datasets: [
              {
                  data: [100, 50, 100],
                  backgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ],
                  hoverBackgroundColor: [
                      "#FF6384",
                      "#36A2EB",
                      "#FFCE56"
                  ]
              }]
          };
  }

  activeBtn(data) {
    this.active = data;
  }

  IconBtn(data) {
    this.activeIcon = data;
  }

  linkBar(data) {
    this.activeBarLink = data;
    if(this.activeBarLink == "TEMORETURE"){
      this.showKpi = false;
    }else{
      this.showKpi = true;
    }
  }
}
