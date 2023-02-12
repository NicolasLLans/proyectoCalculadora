import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {
  @Input() valor:string = "";
  @Output() onClick = new EventEmitter<string>();

  handlerClick(){
    this.onClick.emit(this.valor);
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
