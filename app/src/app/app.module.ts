import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ZoekstationComponent } from './selecteerstation/selecteerstation.component';
import { VertrektijdenComponent } from './vertrektijden/vertrektijden.component';
import { VertrekinfoComponent } from './vertrekinfo/vertrekinfo.component';
import { FiltervertrektijdenComponent } from './filtervertrektijden/filtervertrektijden.component';
import { HttpClientModule } from '@angular/common/http';

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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
