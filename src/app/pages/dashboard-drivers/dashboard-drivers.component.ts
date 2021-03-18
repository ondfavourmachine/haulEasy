import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-drivers',
  templateUrl: './dashboard-drivers.component.html',
  styleUrls: ['./dashboard-drivers.component.css']
})
export class DashboardDriversComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addDriver(){
    (document.querySelector('.target') as HTMLElement).click();
  }

}
