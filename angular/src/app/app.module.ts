import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule, JsonpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ZoekstationComponent } from './selecteerstation/selecteerstation.component';
import { VertrektijdenComponent } from './vertrektijden/vertrektijden.component';
import { VertrekinfoComponent } from './vertrekinfo/vertrekinfo.component';
import { FiltervertrektijdenComponent } from './filtervertrektijden/filtervertrektijden.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoekstationComponent,
    VertrektijdenComponent,
    VertrekinfoComponent,
    FiltervertrektijdenComponent
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
