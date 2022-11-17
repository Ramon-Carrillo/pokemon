import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  apiUrl = `https://pokeapi.co/api/v2/pokemon/`;
  SearchResults = new Subject<any>();

  constructor(private http: HttpClient) {}

  processNextPage(response: any) {
    return {
      next: response.next,
    };
  }

  getMoreData(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${name}`);
  }

  getNextPage(limit: number, offset: number): Observable<any> {
    return this.http.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
        offset * limit
      }`
    );
  }

  getAPokemon(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${name}`);
  }

  passPokemon(res: any): void {
    this.SearchResults.next(res);
  }

  getPassedPokemon(): Observable<any> {
    return this.SearchResults.asObservable();
  }
}
