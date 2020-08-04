import { FormFieldItem } from '../component/form-fields/form-fields.const';
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
  cardSelectOptions
} from '../main.const';

export const NP_CARD = 'npCard';
export const NP_POWER = 'npPower';
export const NP_BUFF = 'npBuff';
export const SPECIAL_NP_BUFF = 'specialNpBuff';

export interface TakaraguModels {
  [ATK]: number;
  [CLASS]: number;
  [CLASS_INHIBITION]: number;
  [GROUP_INHIBITION]: number;
  [NP_CARD]: number;
  [NP_POWER]: number;
  [EQUIPMENT_ATK]: number;
  [ATK_BUFF]: number;
  [CARD_BUFF]: number;
  [NP_BUFF]: number;
  [SPECIAL_BUFF]: number;
  [SPECIAL_NP_BUFF]: number;
  [FIXED_BUFF]: number;
}

export interface TakaraguColModels {
  [ATK]: number;
  [CLASS]: string;
  [CLASS_INHIBITION]: string;
  [GROUP_INHIBITION]: string;
  [NP_CARD]: string;
  [NP_POWER]: number;
  [EQUIPMENT_ATK]: number;
  [ATK_BUFF]: number;
  [CARD_BUFF]: number;
  [NP_BUFF]: number;
  [SPECIAL_BUFF]: number;
  [SPECIAL_NP_BUFF]: number;
  [FIXED_BUFF]: number;
  [MAX_DAMAGE]: number;
  [MIN_DAMAGE]: number;
  [AVG_DAMAGE]: number;
}

export const mainFormItems: FormFieldItem[] = [
  {title: 'ATK', type: 'input', modelName: ATK, initialValue: 0},
  {title: '職階', type: 'select', modelName: CLASS, selectOptions: classSelectOptions, initialValue: 1},
  {title: '職階克制', type: 'select', modelName: CLASS_INHIBITION, selectOptions: classInhibitionSelectOptions, initialValue: 2},
  {title: '陣營克制', type: 'select', modelName: GROUP_INHIBITION, selectOptions: groupInhibitionSelectOptions, initialValue: 1},
  {title: '寶具顏色', type: 'select', modelName: NP_CARD, selectOptions: cardSelectOptions, initialValue: 1.5},
  {title: '寶具倍率(%)', type: 'input', modelName: NP_POWER, initialValue: 0}
];

export const subFormItems: FormFieldItem[] = [
  {title: '禮裝ATK', type: 'input', modelName: EQUIPMENT_ATK, initialValue: 0},
  {title: 'ATK Buff(%)', type: 'input', modelName: ATK_BUFF, initialValue: 0, tooltip: '攻擊力Buff — 敵方防禦力Buff — 敵方特防威力Buff'},
  {title: '色卡 Buff(%)', type: 'input', modelName: CARD_BUFF, initialValue: 0, tooltip: '色卡Buff — 敵方色卡耐性Buff'},
  {title: '寶具威力 Buff(%)', type: 'input', modelName: NP_BUFF, initialValue: 0},
  {title: '特攻威力 Buff(%)', type: 'input', modelName: SPECIAL_BUFF, initialValue: 0},
  {title: '寶具特攻 Buff(%)', type: 'input', modelName: SPECIAL_NP_BUFF, initialValue: 100},
  {title: '固定傷害 Buff', type: 'input', modelName: FIXED_BUFF, initialValue: 0}
];

export const displayedColumns: string[] = [MAX_DAMAGE, MIN_DAMAGE, AVG_DAMAGE];
