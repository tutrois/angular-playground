import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  produtos:string[] = [];
  menuType:string = "asdasd";

  constructor() {
    this.produtos = [
      "mouse",
      "Teclado",
      "Fonte",
      "Cabo"
  ]

   }

  ngOnInit(): void {
  }

  adicionar(): void{
    this.produtos.push("Arthur")
  }
  remover(index:number){
    this.produtos.splice(index, 1)
  }

}
