import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
  providers: [MessageService]
})
export class LineChartComponent {
  data: any;
  active:string = "finance" ;
  activeIcon:string = "Icon1";
  activeBarLink:string = "sales"

  constructor(private messageService: MessageService) {
      this.data = {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
          datasets: [
              {
                  label: 'First Dataset',
                  data: [65, 59, 80, 81, 56, 55, 40],
                  fill: false,
                  borderColor: '#4bc0c0'
              },
              {
                  label: 'Second Dataset',
                  data: [28, 48, 40, 19, 86, 27, 90],
                  fill: false,
                  borderColor: '#565656'
              }
          ]
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

  selectData(event) {
      this.messageService.add({severity: 'info', summary: 'Data Selected', 'detail': this.data.datasets[event.element._datasetIndex].data[event.element._index]});
  }
}
