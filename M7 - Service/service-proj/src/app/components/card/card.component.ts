import { Component, OnInit } from '@angular/core';
import { PokemonData } from 'src/app/models/pokemonData';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent implements OnInit {
  pokemon:PokemonData;
  constructor(
    private _pokemonService : PokemonService
    ){
      this.pokemon = {
        id: 0,
        name: '',
        sprites:{
           front_default: ''
        },
        types: [{
          slot: 0,
          type: {
            name: '',
            url: '',
          }
        }]
      };
    }

  ngOnInit(): void {
    this.getPokemon("pikachu");
  }

  getPokemon(serchName:string){
    this._pokemonService.getPokemon(serchName).subscribe(
      {
        next: (res) => {
          console.log(res.types);
          this.pokemon = {
            id : res.id,
            name: res.name,
            sprites: res.sprites,
            types: res.types,
          };
        },
        error: (err) => this.getPokemon('pikachu')
      }
    );
  }

}
