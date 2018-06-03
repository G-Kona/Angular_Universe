import {Component, OnInit} from '@angular/core';
import {Solarsystem} from "../solarsystem";
import {SolarsystemService} from "../solarsystem.service";
import {CommsService} from "../comms.service";
import {Planet} from "../planet";

@Component({
    selector: 'app-solarsystem',
    templateUrl: './solarsystem.component.html',
    styleUrls: ['./solarsystem.component.css']
})
export class SolarsystemComponent implements OnInit {

    title = 'Solar System Component';
    filterGalaxies: string;
    filterSolarSystems: string;
    solarsystems: Solarsystem[];

    constructor(private solarSystemService: SolarsystemService, private comms: CommsService) {
    }

    ngOnInit() {
        this.comms.solarSystemSelected.subscribe(data => this.filterSolarSystems = data);
        this.comms.galaxySelected.subscribe(data => this.filterGalaxies = data);
        this.solarSystemService.getSystems().subscribe(data => this.solarsystems = data);
    }

    newMessage(selected: string) {
        this.comms.changeSolarSystem(selected)
    }

    filterSystems(selected: string) {
        let newSolarSystems: Solarsystem[] = [];
        for (let p of this.solarsystems) {
            if (p.galaxy === selected) {
                newSolarSystems.push(p);
            }
        }
        return newSolarSystems;
    }

}
