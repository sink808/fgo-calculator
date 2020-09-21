import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { FormFieldItem } from './form-fields.const';
import { TakaraguModels } from '../../takaragu/takaragu.const';
import {
  INPUT,
  SELECT,
} from '../../main.const';
@Component({
  selector: 'app-form-fields',
  templateUrl: './form-fields.component.html',
  styleUrls: ['./form-fields.component.scss']
})
export class FormFieldsComponent implements OnChanges {
  @Input() public mainFormItems: FormFieldItem[] = [];
  @Input() public subFormItems: FormFieldItem[] = [];
  @Output() private calValue: EventEmitter<TakaraguModels> = new EventEmitter<TakaraguModels>();
  public form: FormGroup = this.fb.group({});
  public INPUT: string = INPUT;
  public SELECT: string = SELECT;
  constructor(private fb: FormBuilder) { }

  public ngOnChanges(): void {
    this.setForms();
  }

  private setForms(): void {
    this.mainFormItems
      .forEach((item: FormFieldItem) => this.setForm(item, [Validators.required]));
    this.subFormItems
      .forEach((item: FormFieldItem) => this.setForm(item));
  }

  private setForm(item: FormFieldItem, required?: ValidatorFn[]): void {
    this.form.addControl(item.modelName, this.fb.control(item.initialValue, required));
    if (item.autoSetting) { // link two forms
      this.form.controls[item.modelName].valueChanges.subscribe((val) =>
        this.form.patchValue({ [item.autoSetting.linkName]: item.autoSetting.value(val) }));
    }
  }

  public calculate(): void {
    const resultValue: TakaraguModels = {...this.form.value};
    const keys: string[] = Object.keys(resultValue);
    if (this.form.invalid) {
      return;
    }
    keys.forEach((key) => resultValue[key] = Number(resultValue[key])); // select value will be string
    this.calValue.emit(resultValue);
  }

  public reset(): void {
    [...this.mainFormItems,  ...this.subFormItems]
      .forEach((item: FormFieldItem) => this.form.patchValue({[item.modelName]: item.initialValue}));
  }

}
