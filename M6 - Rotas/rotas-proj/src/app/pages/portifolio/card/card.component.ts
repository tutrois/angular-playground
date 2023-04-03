import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //pegando parametro via URL;
  constructor(
    private activeRoute: ActivatedRoute,
    private navegador : Router
  ){
    //http://localhost:4200/portfolio/{1}
    this.activeRoute.params.subscribe(
      res => console.log(res)
    );

     //http://localhost:4200/portfolio/{1}
     this.activeRoute.firstChild?.params.subscribe(
      res => console.log(res)
    );

    //http://localhost:4200/portfolio/{1}?{name=arthur&token=123}
    this.activeRoute.queryParams.subscribe(
      res=> console.log(res)
    )
  }

  ngOnInit(): void {
    // setInterval(()=>{
    //   //Força um componente a redirecionar a tela
    //   this.navegador.navigate(['/'])
    // }, 5000)
  }

}
