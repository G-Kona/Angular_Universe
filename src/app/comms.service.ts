import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/index";

@Injectable({
    providedIn: 'root'
})
export class CommsService {

    private galaxySelection = new BehaviorSubject<string>('NONE');
    galaxySelected = this.galaxySelection.asObservable();

    private solarSystemSelection = new BehaviorSubject<string>('NONE');
    solarSystemSelected = this.solarSystemSelection.asObservable();

    constructor() {
    }

    changeGalaxy(selection: string) {
        this.galaxySelection.next(selection);
    }

    changeSolarSystem(selection: string) {
        this.solarSystemSelection.next(selection);
    }
}
