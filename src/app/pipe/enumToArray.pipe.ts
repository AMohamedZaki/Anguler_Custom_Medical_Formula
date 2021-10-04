import { PipeTransform, Pipe } from '@angular/core';

/*
 * pipe convert enum to object of name and value
 * you cane check this @https://stackoverflow.com/a/38554683
*/
@Pipe({
  name: 'enumToArray'
})
export class EnumToArrayPipe implements PipeTransform {
  transform(data: Object) {
    const obj = Object.keys(data).map((key) => ({ key, value: data[key] }));
    return obj.slice(obj.length / 2);
  }
}
