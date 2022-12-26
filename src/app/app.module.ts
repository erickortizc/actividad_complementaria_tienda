import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { VistaComponent } from './vista/vista.component';
import { ManejoComponent } from './manejo/manejo.component';

@NgModule({
  declarations: [
    AppComponent,
   
    VistaComponent,
        ManejoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
