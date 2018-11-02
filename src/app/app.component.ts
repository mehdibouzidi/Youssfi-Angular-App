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

  navbarGallery = true;
  navbarAbout: boolean;
  navbarContacts: boolean;

  onClickGallery() {
    this.navbarGallery = !this.navbarGallery;
    this.navbarAbout = false;
    this.navbarContacts = false;
  }
  onClickAbout() {
    this.navbarAbout = !this.navbarAbout;
    this.navbarGallery = false;
    this.navbarContacts = false;
  }
  onClickContacts() {
    this.navbarContacts = !this.navbarContacts;
    this.navbarGallery = false;
    this.navbarAbout = false;
  }
}
