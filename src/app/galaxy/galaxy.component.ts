import {Component, OnInit} from '@angular/core';
import {Galaxy} from "../galaxy";
import {GalaxyService} from "../galaxy.service";
import {CommsService} from "../comms.service";

@Component({
    selector: 'app-galaxy',
    templateUrl: './galaxy.component.html',
    styleUrls: ['./galaxy.component.css']
})
export class GalaxyComponent implements OnInit {

    title = 'Galaxy Component';
    filter: string;
    galaxies: Galaxy[];

    constructor(private galaxyService: GalaxyService, private comms: CommsService) {
    }

    ngOnInit() {
        this.comms.galaxySelected.subscribe(data => this.filter = data);
        this.galaxyService.getGalaxies().subscribe(data => this.galaxies = data)
    }

    newMessage(selected: string) {
        if (selected != this.filter) {
            this.comms.changeSolarSystem('NONE')
            this.comms.changeGalaxy(selected)
        }
    }

}
