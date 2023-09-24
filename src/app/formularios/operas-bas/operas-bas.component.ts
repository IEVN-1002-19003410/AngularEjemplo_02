import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {

  num1='';
  num2='';
  resultado:number=0;
  opcion:number=0;

  resultadoOpcion(){
    if(this.opcion == 1) {
      this.resultado=parseInt(this.num1) + parseInt(this.num2);
    }
    if(this.opcion == 2) {
      this.resultado=parseInt(this.num1) - parseInt(this.num2);
    }
    if (this.opcion == 3) {
      this.resultado=parseInt(this.num1) / parseInt(this.num2);
    }
    if (this.opcion == 4) {
      this.resultado=parseInt(this.num1) * parseInt(this.num2);
    }
  }
}
