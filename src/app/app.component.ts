import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /* autant que tag*/
/*  selector: '[app-root]', Autant qu'un élément d'un TAG*/
/*  selector: '.app-root', Autant que classe d'un TAG*/
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  private LOGO = require('../../resources/angular-logo.png');

}
