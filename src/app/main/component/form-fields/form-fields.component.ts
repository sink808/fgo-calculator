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
  @Input() mainFormItems: FormFieldItem[];
  @Input() subFormItems: FormFieldItem[];
  @Output() calValue: EventEmitter<TakaraguModels> = new EventEmitter<TakaraguModels>();
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) { }

  ngOnChanges(): void {
    this.setForm();
  }

  private setForm(): void {
    this.mainFormItems
      .forEach((item: FormFieldItem) => this.form.addControl(item.modelName, this.fb.control(item.initialValue, [Validators.required])));
    this.subFormItems
      .forEach((item: FormFieldItem) => this.form.addControl(item.modelName, this.fb.control(item.initialValue)));
  }

  public calculate(): void {
    this.calValue.emit(this.form.value);
  }

  public reset(): void {
    this.mainFormItems
      .forEach((item: FormFieldItem) => this.form.patchValue({[item.modelName]: item.initialValue}));
    this.subFormItems
      .forEach((item: FormFieldItem) => this.form.patchValue({[item.modelName]: item.initialValue}));
  }

}
