import { Component, OnInit } from '@angular/core';
import * as math from 'mathjs';



@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {

  expresion:string = '0';

  agregarExpresion(valor:string){
    if(valor==="="){
      this.expresion = math.evaluate(this.expresion);
    }else{
      if(this.expresion === "0"){
        this.expresion="";
      }
      this.expresion += valor;
    }
  }


  limpiarpantalla(){
    this.expresion = "0"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
