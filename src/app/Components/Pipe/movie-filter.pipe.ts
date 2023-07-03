import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'movieFilter'
})
export class MovieFilterPipe implements PipeTransform {

  transform(items: any[], filterSimilar: any): any {
    if (items == null) {
      return items;
    }
    return items.filter(item => item.genres.indexOf(filterSimilar) >= -1);
  }
}


