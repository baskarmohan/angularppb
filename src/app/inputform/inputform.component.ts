import { CommonService } from '../common.service';
import { Product } from '../product';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent   {
name = '';
  model = new Product(10, 'Samsung');
  
  constructor(private temp: CommonService) {
    
  }
 Status: boolean = true; 
   clicked(event) { 
     if (this.Status) {
        this.Status = false; 
     }else {
        this.Status = true; 
     }
     
   } 
 

}
