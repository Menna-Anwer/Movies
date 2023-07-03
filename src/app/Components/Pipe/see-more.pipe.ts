import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'seeMore'
})
export class SeeMorePipe implements PipeTransform {

  transform(overviwe: string , limit: number): string {
    return overviwe.split(' ').slice(0,limit).join(' ') ;
  }

}
