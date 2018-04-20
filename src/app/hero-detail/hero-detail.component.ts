import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { Hero } from '../heroes/hero';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit, OnChanges {
  @Input()
  selectHero: Hero;

  @Output()
  updateHero = new EventEmitter<Hero>();

  originSelectHero: Hero;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
    if (changes.selectHero){
      this.originSelectHero = changes.selectHero.currentValue;
      this.selectHero = Object.assign({}, changes.selectHero.currentValue);
    }
  }

  doModify() {
    this.updateHero.emit(this.selectHero);
  }

  doCancel() {
    this.selectHero = Object.assign({}, this.originSelectHero);
  }

}
