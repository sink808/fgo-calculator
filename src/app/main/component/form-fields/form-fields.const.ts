export interface SelectOption {
  title: string;
  value: number;
}

export interface FormFieldItem {
  title: string;
  type: string;
  modelName: string;
  initialValue: number;
  tooltip?: string;
  selectOptions?: SelectOption[];
}
