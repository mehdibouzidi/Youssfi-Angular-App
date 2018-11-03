import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'TagsPipe'
})
export class TagsPipe implements PipeTransform {

  transform(value: any): string {
    let tags = value.split(',');
    if ( tags.length ===1 ){
      tags = value.split(' ');
    }
    let tagsLimited = '';

    let i = 0;
    for (const tag of tags) {
      tagsLimited += tag;
      i++;
      if (i === 5) {
        break;
      }
    }
    return tagsLimited;
  }

}
