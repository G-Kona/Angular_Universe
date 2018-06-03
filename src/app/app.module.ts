import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SolarsystemComponent } from './solarsystem/solarsystem.component';
import { PlanetComponent } from './planet/planet.component';
import { GalaxyComponent } from './galaxy/galaxy.component';

@NgModule({
  declarations: [
    AppComponent,
    SolarsystemComponent,
    PlanetComponent,
    GalaxyComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
