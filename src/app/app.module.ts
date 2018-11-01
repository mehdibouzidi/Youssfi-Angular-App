import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  /* Déclarer les Composants à Utiliser */
  declarations: [
    AppComponent
  ]

  ,
  /* Importer d'autres Modules */
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  /* Appeler le Composant 'Root' ou le premier Composant qui contient les reste des composants */
  bootstrap: [AppComponent]
})
export class AppModule { }
