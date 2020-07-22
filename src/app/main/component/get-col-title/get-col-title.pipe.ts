import { Pipe, PipeTransform } from '@angular/core';
import { ColModel } from '../table/table.const';
@Pipe({
  name: 'getColTitle'
})
export class GetColTitlePipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    const cols: ColModel[] = args[0];
    const result: ColModel = cols
      .find((col: ColModel) => col.key === value);

    return (result) ? result.title : '';

  }

}
