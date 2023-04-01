import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.css']
})
export class CompAtributosComponent implements OnInit {
  stilo:string = 'enable';
  corFundo:string = 'red';
  item:string = '';
  lista:string[] = [];
  isEnabledBlock:boolean = true;

  constructor() {
    const caquiQuerCaca: string = '';
   }

  ngOnInit(): void {
  }

  trocar(){
    if (this.stilo == 'disable'){
      this.stilo = 'enable';
    }else{
      this.stilo = 'disable';
    }
  }

  adicionarLista(){
    this.lista.push(this.item);
  }

}
