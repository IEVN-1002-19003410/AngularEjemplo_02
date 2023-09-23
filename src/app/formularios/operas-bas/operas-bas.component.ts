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
  opcion='';

  sumar(){
    this.resultado=parseInt(this.num1) + parseInt(this.num2);
  }resta(){
    this.resultado=parseInt(this.num1) - parseInt(this.num2);
  }division(){
    this.resultado=parseInt(this.num1) / parseInt(this.num2);
  }multiplicacion(){
    this.resultado=parseInt(this.num1) * parseInt(this.num2);
  }

}
