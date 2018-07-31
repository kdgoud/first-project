import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  message: string ;

  constructor() {

  setInterval(() => {
    let currDate = new Date();
    this.message = currDate.toDateString() + ' ' + currDate.toLocaleTimeString();
    } , 1000);
   }

  ngOnInit() {
  }

}
