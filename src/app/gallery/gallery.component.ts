import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {GalleryService} from '../../services/gallery.service';

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

  constructor(private galleryService: GalleryService) { }

  ngOnInit() {
  }

  onSearch(dataForm) {
    this.galleryService.search(dataForm.hashtag, this.size, this.currentPage)
      .subscribe(data => {
        console.log(data);
        this.picturesPage = data;
        this.totalPages = data.totalHits / this.size;
        if (data.totalHits % this.size !== 0) {
          this.totalPages++;
        }
        this.totalPages = Math.floor(this.totalPages);
        console.log(this.totalPages);
        this.pages = new Array(this.totalPages);
      }, err=> {
        console.log('API response ERROR !');
      });
  }
  goToPage(index) {
    this.currentPage = index + 1;
    this.onSearch({ hashtag: this.tagSearch});
  }
}
