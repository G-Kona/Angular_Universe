import {Injectable} from '@angular/core';
import {Planet} from "./planet";
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PlanetService {

    planets: Planet[] = [
        {id: 1, name: 'Mercury', solarsystem: 'Solar System'},
        {id: 2, name: 'Venus', solarsystem: 'Solar System'},
        {id: 3, name: 'Earth', solarsystem: 'Solar System'},
        {id: 4, name: 'Mars', solarsystem: 'Solar System'},
        {id: 5, name: 'Jupiter', solarsystem: 'Solar System'},
        {id: 6, name: 'Saturn', solarsystem: 'Solar System'},
        {id: 7, name: 'Uranus', solarsystem: 'Solar System'},
        {id: 8, name: 'Neptune', solarsystem: 'Solar System'},
        {id: 9, name: 'Crabulon', solarsystem: 'Crabulous System'},
        {id: 10, name: 'Shrimple', solarsystem: 'Crabulous System'},
        {id: 11, name: 'Lobstro', solarsystem: 'Crabulous System'},
        {id: 12, name: 'Amazonia', solarsystem: 'Amarutuf System'},
        {id: 13, name: 'Eternium', solarsystem: 'Amarutuf System'},
        {id: 14, name: 'Omega 3', solarsystem: 'Amarutuf System'},
        {id: 15, name: 'Omicron Persei 8', solarsystem: 'Amarutuf System'},
        {id: 16, name: 'Trisol', solarsystem: 'Amarutuf System'},
        {id: 17, name: 'Wormulon', solarsystem: 'Amarutuf System'}
    ];

    getPlanets(): Observable<Planet[]> {
        return of(this.planets);
    }

    constructor() {
    }
}
