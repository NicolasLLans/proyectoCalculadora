import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() valor:string = "";

  handlerClick(){
    console.log(`Click en ${this.valor}`);
  }

  constructor() { }

  ngOnInit(): void {
  }

  soyOperador(valor:string){
    return valor=== "+"|| valor==="-"|| valor==="x"|| valor==="/"||valor==="("||valor===")"||valor==="=";
  }
  soyClear(valor:string){
    return valor==="C"
  }
}
