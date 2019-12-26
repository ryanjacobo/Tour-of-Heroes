import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HeroModel } from '../heroes-database/hero';
import { HeroesList } from '../heroes-database/heroesdb';

import { MessageService } from './message.service'

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService, private http: HttpClient) { }

  heroes: HeroModel[];
  heroesRoute: "http://localhost.3000/heroesdb";

  getHeroes(): Observable<HeroModel[]> {
    this.messageService.add('HeroService: fetched heroes'); // TODO: send the message _after_ fetching the heroes
    // return of(HeroesList);
    return this.http.get<HeroModel[]>(this.heroesRoute) // replaces return of(HeroesList) since heroes are gonna be retrieved from heroesdb.jason
  }

  getHero(id: number): Observable<HeroModel> {
    // TODO: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HeroesList.find(hero => hero.id === id));
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
