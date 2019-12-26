import { Component, OnInit } from '@angular/core';
import { HeroService } from '../service/hero.service';
import { HeroModel } from '../heroes-database/hero'; //not necessary (so far)


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  heroes: HeroModel[] = []; // not necessary (so far)

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0, 5)); //(0, 5) - displays id's 1-5
  }

}
