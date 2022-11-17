import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  pokemones: any[] = [];

  imgError(event: any) {
    event.target.src = '../../../assets/Poké_Ball_icon.svg.png';
  }
  searchPokemon: string = '';
  constructor(
    private pokemonService: PokemonService,
    activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    activatedRoute.params.subscribe((params) => {
      if (params['name']) {
        this.searchPokemonByName(params['name']);
      }
    });
  }

  ngOnInit(): void {}

  searchPokemonByName(name: string) {
    if (name)
      this.router.navigateByUrl(`https://pokeapi.co/api/v2/
/pokemon/${name}`);
    // this.searchPokemon = this.searchPokemon.toLowerCase();
    // if (this.searchPokemon === '') return;

    // this.pokemonService
    //   .getAPokemon(this.searchPokemon)
    //   .subscribe((data: any) => {
    //     this.pokemones = [];
    //     this.pokemones.push(data);
    //   });
  }
}
