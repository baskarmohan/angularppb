import { Component, OnInit } from '@angular/core';
import { CommonService } from './common.service';
@Component({
  selector: 'app-root',
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {

  constructor(private commonService: CommonService) {

  }
  newcomponent: String = 'newcomponent';
  comp2: String = 'Comp2';
  cars: String[];
  title = 'app';

  ngOnInit() {
    this.cars = this.commonService.getCars();
      console.log(this.cars);
  }
}
