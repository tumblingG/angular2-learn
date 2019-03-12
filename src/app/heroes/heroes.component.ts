import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.less']
})
export class HeroesComponent implements OnInit {
    heroes = HEROES;
    selectHero: Hero;
    constructor() {}
    ngOnInit() {}
    onSelect(hero: Hero): void {
        this.selectHero = hero;
    }
}