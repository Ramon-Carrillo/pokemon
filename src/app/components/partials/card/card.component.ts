import { Component, OnInit } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  pokemones: any[] = [];
  page: number = 1;
  totalPokemones!: number;
  imgError(event: any) {
    event.target.src = '../../../assets/Poké_Ball_icon.svg.png';
  }
  searchPokemon: string = '';
  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.getAllPokemons();
  }

  getAllPokemons() {
    this.pokemonService
      .getNextPage(20, this.page - 1)
      .subscribe((data: any) => {
        this.totalPokemones = data.count;

        data.results.forEach((pokemon: any) => {
          this.pokemonService
            .getMoreData(pokemon.name)
            .subscribe((data: any) => {
              this.pokemones.push(data);
              this.pokemones.sort((a: any, b: any) => {
                return a.id - b.id;
              });
            });
        });
      });
  }
}
