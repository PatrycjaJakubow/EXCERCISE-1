import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class SearchFilterPipe implements PipeTransform {

  transform(data: any[], filterProperty: string, filter: string): any[] {
    return filter
      ? data.filter(item => item[filterProperty].includes(filter))
      : data;
       }
}