import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent {
   datos: any;
   
  constructor(){

    this.datos= localStorage.getItem('myArray'); //para poder ver el array que mandamos en el index
// Se parsea para poder ser usado en js con JSON.parse :)
      this.datos = JSON.parse(this.datos);
    console.log(this.datos);
  }
}
