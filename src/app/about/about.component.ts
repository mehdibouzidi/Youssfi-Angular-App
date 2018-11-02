import { Component, OnInit } from '@angular/core';
import {AboutService} from '../../services/about.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info: any;
  comments= [];

  comment= {date: null, message: ''};
  /*
  private aboutService: AboutService;
    constructor(aboutService: AboutService) {
      this.aboutService = aboutService;
    }
  C'est l'équivalent de ce que nous avons fait dans le constructeur
  * */
  constructor(private aboutService: AboutService) {
    this.info = aboutService.getInfo();
    this.comments = aboutService.getAllComments();
  }

  ngOnInit() {
  }

  onAddComment(c) {
    this.aboutService.addComment(c);
    this.comment.message = '';
    this.comments = this.aboutService.getAllComments();
  }
}
