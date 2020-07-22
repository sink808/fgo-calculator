import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormFieldItem } from './form-fields.const';
import { TakaraguModels } from '../../takaragu/takaragu.const';
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

  constructor(private fb: FormBuilder) { }

  public ngOnChanges(): void {
    this.setForm();
  }

  private setForm(): void {
    this.mainFormItems
      .forEach((item: FormFieldItem) => this.form.addControl(item.modelName, this.fb.control(item.initialValue, [Validators.required])));
    this.subFormItems
      .forEach((item: FormFieldItem) => this.form.addControl(item.modelName, this.fb.control(item.initialValue)));
  }

  public calculate(): void {
    const resultValue: TakaraguModels = {...this.form.value};
    const keys: string[] = Object.keys(resultValue);
    keys.forEach((key) => resultValue[key] = Number(resultValue[key])); // select value will be string
    this.calValue.emit(resultValue);
  }

  public reset(): void {
    this.mainFormItems
      .forEach((item: FormFieldItem) => this.form.patchValue({[item.modelName]: item.initialValue}));
    this.subFormItems
      .forEach((item: FormFieldItem) => this.form.patchValue({[item.modelName]: item.initialValue}));
  }

}
