import { Injectable } from '@angular/core';
import { SelectOption, FormFieldItem } from './component/form-fields/form-fields.const';
@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  private getOptionValue(index: number, options: SelectOption[], key: string): number {
    const result: SelectOption = options[index];
    return result ? result[key] : 0;
  }

  private indexTo<T>(model: T, formItems: FormFieldItem[]): (optKey: string) => T {
    return (optKey: string) => {
      const keys: string[] = Object.keys(model);
      const ouput: T = {...model};
      keys.forEach((key: string) => {
        const targetModel: FormFieldItem = formItems.find((item) => item.modelName === key);
        if (targetModel && targetModel.type === 'select') {
          ouput[key] = this.getOptionValue(ouput[key], targetModel.selectOptions, optKey);
        }
      });
      return ouput;
    };
  }

  public indexToValue<T>(model: T, formItems: FormFieldItem[]): T {
    return this.indexTo(model, formItems)('value');
  }

  public indexToTitle<T>(model: T, formItems: FormFieldItem[]): T {
    return this.indexTo(model, formItems)('title');
  }

}
