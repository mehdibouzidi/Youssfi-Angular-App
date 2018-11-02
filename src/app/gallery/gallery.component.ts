import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  picturesPage: any;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSearch(dataForm) {
    this.http.get('https://pixabay.com/api/?key=5018902-5a565564cde21c6489454ef6f&q='
      + dataForm.hashtag +
      '&per_page=10&page=1')
      .map(resp => resp.json())
      .subscribe(data => {
        console.log(data);
        this.picturesPage = data;
      });

    /*    console.log(this.picturesPage);*/

  }
}
