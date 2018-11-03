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
  currentPage = 1;
  size = 10;
  totalPages: number;
  pages: Array<number> = [];
  tagSearch: string;

  constructor(private http: Http) { }

  ngOnInit() {
  }

  onSearch(dataForm) {
    this.http.get('https://pixabay.com/api/?key=5018902-5a565564cde21c6489454ef6f&q='
      + dataForm.hashtag +
      '&per_page=10&page='+ this.currentPage)
      .map(resp => resp.json())
      .subscribe(data => {
        console.log(data);
        this.picturesPage = data;
        this.totalPages = data.totalHits / this.size;
        if (data.totalHits % this.size !== 0){
          this.totalPages++;
        }
        this.totalPages = Math.floor(this.totalPages);
        console.log(this.totalPages);
        this.pages = new Array(this.totalPages);
      });

    /*    console.log(this.picturesPage);*/

  }

  goToPage(index) {
    this.currentPage = index + 1;
    this.onSearch({ hashtag: this.tagSearch});
  }
}
