import { Component } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  template: `<ejs-datepicker></ejs-datepicker>`,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private primengConfig: PrimeNGConfig) {}
  title = 'dashBoard';
}
