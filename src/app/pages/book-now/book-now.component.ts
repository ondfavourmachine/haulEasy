import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.component.html',
  styleUrls: ['./book-now.component.css']
})
export class BookNowComponent implements OnInit {
  view: '' | 'select-truck' | 'delivery-fee' | 'make-payment' = ''
  constructor() { }

  ngOnInit() {
  }

}
