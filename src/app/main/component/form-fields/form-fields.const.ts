interface AutoSetting {
  linkName: string;
  value: (val: string) => number;
}

interface Autocomplete {
  name: string;
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
  autocomplete?: Autocomplete;
  options?: SelectOption[];
}


