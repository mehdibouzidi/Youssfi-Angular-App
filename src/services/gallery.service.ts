
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class GalleryService {

  constructor(private http: Http) { }

  search(hashtag: string, size: number, page: number) {
    return this.http.get('https://pixabay.com/api/?key=5018902-5a565564cde21c6489454ef6f&q='
      + hashtag +
      '&per_page=10&page=' + page)
      .map(resp => resp.json());

    /*    console.log(this.picturesPage);*/

  }

}
