import { Component } from '@angular/core';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=! this.muestraImg;
  }

  productos:Iproducto[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "year":"febrero 3 2020",
      "precio":120000,
      "Marca":"Nissan",
      "Color":"Naranja",
      "imagenUrl":"https://upload.wikimedia.org/wikipedia/commons/9/92/Nuevo_Nissan_Sentra_2023.webp"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"2 puertas",
      "year":"marzo 5 2022",
      "precio":180000,
      "Marca":"Audi",
      "Color":"Blanco",
      "imagenUrl":"https://upload.wikimedia.org/wikipedia/commons/9/9b/Audi_A4_B9_Limousine_3.0_TDI_quattro.JPG"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      "year": "enero 2 2023",
      "precio":135000,
      "Marca":"Kia",
      "Color":"Blanco",
      "imagenUrl":"https://upload.wikimedia.org/wikipedia/commons/6/60/2018_Kia_Rio_EX_-_Side.jpg"
    }
  ]

}
