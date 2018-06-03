import {Component, OnInit} from '@angular/core';
import {Planet} from "../planet";
import {PlanetService} from "../planet.service";
import {CommsService} from "../comms.service";

@Component({
    selector: 'app-planet',
    templateUrl: './planet.component.html',
    styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

    title = 'Planet Component';
    filter: string;
    planets: Planet[];

    constructor(private planetService: PlanetService, private comms: CommsService) {
    }

    ngOnInit() {
        this.comms.solarSystemSelected.subscribe(data => this.filter = data);
        this.planetService.getPlanets().subscribe(data => this.planets = data);
    }

    filterPlanets(selected: string) {
        let newPlanets: Planet[] = [];
        for (let p of this.planets) {
            if (p.solarsystem === selected) {
                newPlanets.push(p);
            }
        }
        return newPlanets;
    }

}
