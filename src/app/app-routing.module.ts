import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {VistaComponent} from './vista/vista.component';  
import {ManejoComponent} from './manejo/manejo.component';  
const routes: Routes = [
  {
    path:'vista-items',
    component:VistaComponent
  },
  {
    path:'manejo-items',
    component:ManejoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
