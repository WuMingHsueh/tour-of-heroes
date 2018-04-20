
import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectHero: Hero;

  constructor() { }

  ngOnInit() {
    this.heroes = HEROES;
  }

  onSelectHero(hero: Hero) {
    this.selectHero = hero;
  }

  changeHeroName(post: Hero) {
    this.heroes = this.heroes.map(hero => {
      if(hero.id == post.id) {
        return Object.assign({}, post);
      }
      return hero;
    });
    this.selectHero = Object.assign({}, post);
  }
}
