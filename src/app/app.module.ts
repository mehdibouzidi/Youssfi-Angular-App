import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import {AboutService} from "../services/about.service";

@NgModule({
  /* Déclarer les Composants à Utiliser */
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent
  ]

  ,
  /* Importer d'autres Modules */
  imports: [
    BrowserModule,
    FormsModule, /* Quand on utilise Form Module*/
    HttpModule
  ],
  providers: [
    AboutService
  ],
  /* Appeler le Composant 'Root' ou le premier Composant qui contient les reste des composants */
  bootstrap: [AppComponent]
})
export class AppModule { }
