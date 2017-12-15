import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NewcomponentComponent } from './level1/newcomponent.component';
import { CommonService } from './common.service';
import   AppRoutes  from './app.routes';
import { RouterModule, Routes } from '@angular/router';
import { Comp2Component } from './level2/comp2.component';
import { InputformComponent } from './inputform/inputform.component';
import { NgRedux, NgReduxModule } from '@angular-redux/store';
import {IAppState, rootReducer, INITIAL_STATE} from './store';
import { AlertModule } from 'ngx-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    NewcomponentComponent,
    Comp2Component,
    InputformComponent
  ],
  imports: [
    BrowserModule, FormsModule, AppRoutes, NgReduxModule, AlertModule.forRoot()
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
