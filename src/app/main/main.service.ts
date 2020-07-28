import { Injectable } from '@angular/core';
import { SelectOption } from './component/form-fields/form-fields.const';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  public getOptionTitle(value: number, options: SelectOption[]): string {
    const result: SelectOption = options.find((option) => option.value === value);
    return (result) ? result.title : '';
  }

}
