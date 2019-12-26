import { Component, OnInit, Input } from '@angular/core';
import {HeroModel} from '../heroes-database/hero';
import { HeroService } from '../service/hero.service';

// to route to a separate HeroDetail page
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() herodetails: HeroModel;
  

  constructor(private heroService: HeroService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.heroService.getHero(id)
      .subscribe(herodetails => this.herodetails = herodetails);
  }

}
