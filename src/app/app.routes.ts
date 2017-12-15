
import { AppComponent } from './app.component';
import { Comp2Component } from './level2/comp2.component';
import { NewcomponentComponent } from './level1/newcomponent.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'newcomponent', component: NewcomponentComponent },
  { path: 'Comp2',      component: Comp2Component }
];


export default RouterModule.forRoot(appRoutes);

