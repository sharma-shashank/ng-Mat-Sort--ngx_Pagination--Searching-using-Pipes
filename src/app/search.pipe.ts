import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any[], searchString: string): any {
    if (!searchString) {
      return value;
    }
    return value.filter(it => {
      const first_name = it.first_name.toLowerCase().includes(searchString.toLowerCase());
      return first_name;
    });
  }

}
