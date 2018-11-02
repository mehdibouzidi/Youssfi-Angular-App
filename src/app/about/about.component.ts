import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  info= {
    nom: 'BOUZIDI',
    email: 'mhd@gmail.com',
    tel: 658987
  };

  comments= [
    {date: new Date(), message: 'A' },
    {date: new Date(), message: 'B' },
    {date: new Date(), message: 'C'},
  ];

  comment= {date: null, message: ''};

  constructor() { }

  ngOnInit() {
  }

  onAddComment() {
    this.comment.date = new Date();
    this.comments.push(this.comment);
    this.comment= {date: null, message: ''};
  }
}
