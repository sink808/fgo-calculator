import { SelectOption, FormFieldItem } from '../component/form-fields/form-fields.const';
import {
  ATK,
  CLASS,
  CLASS_INHIBITION,
  GROUP_INHIBITION,
  EQUIPMENT_ATK,
  ATK_BUFF,
  CARD_BUFF,
  SPECIAL_BUFF,
  FIXED_BUFF,
  MAX_DAMAGE,
  MIN_DAMAGE,
  AVG_DAMAGE,
  classSelectOptions,
  classInhibitionSelectOptions,
  groupInhibitionSelectOptions,
  equipmentAtkOptions
} from '../main.const';

export const CARD = 'card';
export const CARD_ORDER = 'cardOrder';
export const FIRST_CARD = 'firstCard';
export const BUSTER_CHAIN = 'busterChain';
export const IS_CRITICAL = 'isCritical';
export const CRITICAL_BUFF = 'criticalBuff';

export interface AtkModels {
  [ATK]: number;
  [CLASS]: number;
  [CLASS_INHIBITION]: number;
  [GROUP_INHIBITION]: number;
  [CARD]: number;
  [CARD_ORDER]: number;
  [FIRST_CARD]: number;
  [BUSTER_CHAIN]: number;
  [EQUIPMENT_ATK]: number;
  [ATK_BUFF]: number;
  [CARD_BUFF]: number;
  [SPECIAL_BUFF]: number;
  [IS_CRITICAL]: number;
  [CRITICAL_BUFF]: number;
  [FIXED_BUFF]: number;
}

export interface AtkColModels {
  [ATK]: number;
  [CLASS]: string;
  [CLASS_INHIBITION]: string;
  [GROUP_INHIBITION]: string;
  [CARD]: string;
  [CARD_ORDER]: string;
  [FIRST_CARD]: string;
  [BUSTER_CHAIN]: string;
  [EQUIPMENT_ATK]: number;
  [ATK_BUFF]: number;
  [CARD_BUFF]: number;
  [SPECIAL_BUFF]: number;
  [IS_CRITICAL]: string;
  [CRITICAL_BUFF]: number;
  [FIXED_BUFF]: number;
  [MAX_DAMAGE]: number;
  [MIN_DAMAGE]: number;
  [AVG_DAMAGE]: number;
}

export const cardDmgSelectOptions: SelectOption[] = [
  {title: 'Buster(紅)', value: 1.5},
  {title: 'Arts(藍)', value: 1},
  {title: 'Quick(綠)', value: 0.8},
  {title: 'Extra Attack(前三張同色)', value: 3.5},
  {title: 'Extra Attack(前三張不同色)', value: 2}
];

export const cardOrderSelectOptions: SelectOption[] = [
  {title: '第1張', value: 1},
  {title: '第2張', value: 1.2},
  {title: '第3張', value: 1.4},
  {title: '第4張(Extra Attack)', value: 0}, // set 0 to distinguish from 1st card
];

export const firstCardSelectOptions: SelectOption[] = [
  {title: 'Buster(紅)', value: 0.5},
  {title: '非Buster(紅)', value: 0},
];

export const busterChainSelectOptions: SelectOption[] = [
  {title: '是', value: 0.2},
  {title: '否', value: 0},
];

export const isCriticalSelectOptions: SelectOption[] = [
  {title: '是', value: 2},
  {title: '否', value: 1},
];

export const mainFormItems: FormFieldItem[] = [
  {title: 'ATK', type: 'input', modelName: ATK, initialValue: 0},
  {title: '職階', type: 'select', modelName: CLASS, selectOptions: classSelectOptions, initialValue: 1},
  {title: '職階克制', type: 'select', modelName: CLASS_INHIBITION, selectOptions: classInhibitionSelectOptions, initialValue: 2},
  {title: '陣營克制', type: 'select', modelName: GROUP_INHIBITION, selectOptions: groupInhibitionSelectOptions, initialValue: 1},
  {title: '卡片顏色', type: 'select', modelName: CARD, selectOptions: cardDmgSelectOptions, initialValue: 1.5,
    autoSetting: {
      linkName: CARD_ORDER,
      value: (val: string) => {
        return (val === '2' || val === '3.5') ? 0 : 1;
      }
    }
  },
  {title: '卡片位置', type: 'select', modelName: CARD_ORDER, selectOptions: cardOrderSelectOptions, initialValue: 1},
  {title: '首卡顏色', type: 'select', modelName: FIRST_CARD, selectOptions: firstCardSelectOptions, initialValue: 0.5},
  {title: 'Buster Chain加成', type: 'select', modelName: BUSTER_CHAIN, selectOptions: busterChainSelectOptions, initialValue: 0}
];

export const subFormItems: FormFieldItem[] = [
  {title: '禮裝ATK', type: 'input', modelName: EQUIPMENT_ATK, initialValue: 0, options: equipmentAtkOptions
  },
  {title: 'ATK Buff(%)', type: 'input', modelName: ATK_BUFF, initialValue: 0, tooltip: '攻擊力Buff — 敵方防禦力Buff — 敵方特防威力Buff'},
  {title: '色卡 Buff(%)', type: 'input', modelName: CARD_BUFF, initialValue: 0, tooltip: '色卡Buff — 敵方色卡耐性Buff'},
  {title: '特攻威力 Buff(%)', type: 'input', modelName: SPECIAL_BUFF, initialValue: 0},
  {title: '固定傷害 Buff', type: 'input', modelName: FIXED_BUFF, initialValue: 0},
  {title: '是否爆擊', type: 'select', modelName: IS_CRITICAL, initialValue: 1, selectOptions: isCriticalSelectOptions},
  {title: '爆擊威力 Buff(%)', type: 'input', modelName: CRITICAL_BUFF, initialValue: 0}
];

export const displayedColumns: string[] = [MAX_DAMAGE, MIN_DAMAGE, AVG_DAMAGE];