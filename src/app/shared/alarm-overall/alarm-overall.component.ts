import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alarm-overall',
  templateUrl: './alarm-overall.component.html',
  styleUrls: ['./alarm-overall.component.scss']
})
export class AlarmOverallComponent implements OnInit {

  data: any;
  Frequency:any[] = [
    {
      period: "Today",
      time: "3 times",
      min: "10 min"

    }
    ,

    {
      period: "Yesterday",
      time: "4 times",
      min: "20 min"

    }

    ,

    {
      period: "Last Week",
      time: "5 times",
      min: "12 min"

    }

]

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

  ngOnInit(): void {
  }

}
