import { Component } from '@angular/core';

import { HEROES } from 'src/app/mocks/heroes.mock';
import { Hero } from 'src/app/shared/models/hero.model';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  heroes = HEROES;
  selectedHero?: Hero;

  onSelect(hero: Hero): void {
    if(this.selectedHero?.id === hero.id) {
      this.selectedHero = undefined;
    } else {
      this.selectedHero = hero;
    }
  }
}
