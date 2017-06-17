import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TreindrukteComponent } from './treindrukte/treindrukte.component';
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ZoekstationComponent } from './selecteerstation/selecteerstation.component';
import { VertrektijdenComponent } from './vertrektijden/vertrektijden.component';
import { VertrekinfoComponent } from './vertrekinfo/vertrekinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    TreindrukteComponent,
    ZoekstationComponent,
    VertrektijdenComponent,
    VertrekinfoComponent
  ],
  imports: [
    BrowserModule,
    JsonpModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
