import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  pokemones: any[] = [];
  searchPokemon: string = '';

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {}

  searchPokemonByName() {
    this.searchPokemon = this.searchPokemon.toLowerCase();
    if (this.searchPokemon === '') return;

    this.pokemonService
      .getAPokemon(this.searchPokemon)
      .subscribe((data: any) => {
        this.pokemones = [];
        this.pokemones.push(data);
      });
  }
}
