import { Injectable } from '@angular/core';

@Injectable()
export class CommonService {
  constructor() { }
 cars = ['test' , 'test1'];
 getCars() {
   return this.cars;
 }
}
