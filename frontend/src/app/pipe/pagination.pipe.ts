import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pagination'
})
export class PaginationPipe implements PipeTransform {

  transform(item: any[], startPage: number, limitPage: number): any {
    return item.slice(((startPage - 1) * limitPage), startPage * limitPage);
  }

}
