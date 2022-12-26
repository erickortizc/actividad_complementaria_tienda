import { Component } from '@angular/core';

@Component({
  selector: 'app-manejo',
  templateUrl: './manejo.component.html',
  styleUrls: ['./manejo.component.css']
})
export class ManejoComponent {
  
  art= {codigo:0,descripcion:"",precio:0,imagen:""};
  articulos =  [{codigo: 1,descripcion:"papas",precio:10.55,imagen:"https://saborusa.com.pa/imagesmg/imagenes/5ff3e6a0b703f_potatoes-food-supermarket-agriculture-JG7QGNY.jpg"},
                {codigo: 2,descripcion:"manzanas",precio:10.55,imagen:"https://i.blogs.es/e7e2fd/manzanas-colores/840_560.jpg"},
                {codigo: 3,descripcion:"melon",precio:10.55,imagen:"http://www.frutas-hortalizas.com/img/fruites_verdures/presentacio/19.jpg"},
                {codigo: 4,descripcion:"cebolla",precio:10.55,imagen:"https://content21.sabervivirtv.com/medio/2022/03/08/cebolla-guia-alimentos_ddaa9afc_1280x720.jpg"},
                {codigo: 5,descripcion:"sandia",precio:10.55,imagen:"https://www.gob.mx/cms/uploads/article/main_image/78889/SANDIA_blog.jpg"}
                ]

hayregistros(){
  return this.articulos.length>0;
}
borrar(codigo:number){
  for (let x = 0; x < this.articulos.length; x++) {
    if(this.articulos[x].codigo== codigo){
      if (confirm('Esta seguro de continuar?')){
      this.articulos.splice(x,1);
      localStorage.setItem('myArray', JSON.stringify(this.articulos)); 
      return;
      }
    }
  }
  
}
seleccionar(art: {codigo:number, descripcion:string,imagen:string, precio:number,}){
  this.art.codigo = art.codigo;
  this.art.descripcion = art.descripcion;
  this.art.precio = art.precio;
  this.art.imagen=art.imagen;
}
agregar(){
 if(this.art.codigo <= 0){
  alert('Debe de ingresar un valor mayor a 0');
  return ;
 }else{
  for (let x = 0; x < this.articulos.length; x++) {
    if(this.articulos[x].codigo==this.art.codigo){
      alert('Ya existe un item con ese codigo');
      return;
    }
 }

  this.articulos.push({codigo:this.art.codigo,
                       descripcion:this.art.descripcion,
                       precio:this.art.precio,
                      imagen:this.art.imagen}
                      );
this.art.codigo =0;
this.art.descripcion ="";
this.art.precio =0;
this.art.imagen="";
   localStorage.setItem('myArray', JSON.stringify(this.articulos)); 
}

}
modificar(){
  let estatus = false;
  for (let x = 0; x < this.articulos.length; x++) {
    if(this.articulos[x].codigo==this.art.codigo){
      this.articulos[x].descripcion = this.art.descripcion;
      this.articulos[x].precio = this.art.precio;
      this.articulos[x].imagen=this.art.imagen;
      estatus = true;
      
    }
    
  }
  localStorage.setItem('myArray', JSON.stringify(this.articulos)); 
  if(!estatus){
    alert('No existe el codigo');
  }
}
}
