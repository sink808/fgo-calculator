interface AutoSetting {
  linkName: string;
  value: (val: string) => number;
}

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
  autoSetting?: AutoSetting;
}


