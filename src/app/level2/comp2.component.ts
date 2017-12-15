import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

constructor(private _router: Router) {} 

   onBack(): void { 
      this._router.navigate(['/newcomponent']); 
   }
  ngOnInit() {
  }

}
