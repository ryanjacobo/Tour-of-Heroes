import { Component, OnInit } from '@angular/core';
import {HeroModel} from '../heroes-database/hero'; 
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  // heroes = HeroesList; replaced by heroes: Hero[]
  
  constructor(private heroService: HeroService) { }

  heroes: HeroModel[] // not necessary (anymore) with HeroService
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit() {
    this.getHeroes();
  }

  // ngOnInit() {}

}
