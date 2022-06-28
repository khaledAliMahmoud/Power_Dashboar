import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispenser-details',
  templateUrl: './dispenser-details.component.html',
  styleUrls: ['./dispenser-details.component.scss']
})
export class DispenserDetailsComponent implements OnInit {

  rows:number[] = [1,2,3]

  constructor() { }

  ngOnInit(): void {
  }

}
