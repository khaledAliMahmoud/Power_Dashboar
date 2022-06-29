import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elements',
  templateUrl: './elements.component.html',
  styleUrls: ['./elements.component.scss']
})
export class ElementsComponent implements OnInit {

  activeTab:string = "tab1";

  constructor() { }

  activeTabsBtn(data){
    this.activeTab = data
  }

  ngOnInit(): void {
  }

}
