import {Injectable} from '@angular/core';
import {Galaxy} from "./galaxy";
import {Observable, of} from "rxjs";
import {Planet} from "./planet";

@Injectable({
    providedIn: 'root'
})
export class GalaxyService {

    galaxies: Galaxy[] = [
        {id: 1, name: 'Milky Way'},
        {id: 2, name: 'Galaxy of Terror'}
    ];

    getGalaxies(): Observable<Galaxy[]> {
        return of(this.galaxies);
    }

    constructor() {
    }
}
