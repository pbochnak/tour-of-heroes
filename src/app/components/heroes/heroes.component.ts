import { Component, OnInit } from '@angular/core';

import { HeroService } from 'src/app/services/hero.service';
import { Hero } from 'src/app/shared/models/hero.model';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService, private messageService: MessageService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    if(name) {
      name = name.trim();

      this.heroService.addHero({ name } as Hero).subscribe(hero => { this.heroes.push(hero) })
    }
  }

  delete(deletedHeroId: number): void {
    this.heroes = this.heroes.filter(({ id }) => id !== deletedHeroId);
    this.heroService.deleteHero(deletedHeroId).subscribe();
  }
}
