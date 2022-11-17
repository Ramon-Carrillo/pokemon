import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private title: Title, private meta: Meta) {}

  ngOnInit() {
    this.title.setTitle('Pokedex');
    this.meta.addTags([
      {
        name: 'description',
        content: `Ramon Carrillo's Pokedex`,
      },
      { name: 'author', content: `Ramon Carrillo` },
    ]);
  }
}
