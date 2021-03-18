import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  addTruck(){
    (document.querySelector('.target-1') as HTMLElement).click();
  }
}
