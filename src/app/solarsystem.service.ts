import {Injectable} from '@angular/core';
import {Solarsystem} from "./solarsystem";
import {Observable, of} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SolarsystemService {

    solarsystems: Solarsystem[] = [
        {id: 1, name: 'Solar System', galaxy: 'Milky Way'},
        {id: 2, name: 'Crabulous System', galaxy: 'Milky Way'},
        {id: 3, name: 'Amarutuf System', galaxy: 'Galaxy of Terror'}
    ];

    getSystems(): Observable<Solarsystem[]> {
        return of(this.solarsystems);
    }

    constructor() {
    }
}
