import { FormFieldItem, SelectOption } from '../component/form-fields/form-fields.const';
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
  REMOVE,
  classSelectOptions,
  classInhibitionSelectOptions,
  groupInhibitionSelectOptions,
  cardSelectOptions,
  equipmentAtkOptions
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

const npPowerOptions: SelectOption[] = [
  {title: '300', value: 300},
  {title: '400', value: 400},
  {title: '450', value: 450},
  {title: '475', value: 475},
  {title: '500', value: 500},
  {title: '550', value: 550},
  {title: '575', value: 575},
  {title: '600', value: 600},
  {title: '625', value: 625},
  {title: '662.5', value: 662.5},
  {title: '650', value: 650},
  {title: '675', value: 675},
  {title: '700', value: 700},
  {title: '712.5', value: 712.5},
  {title: '750', value: 750},
  {title: '800', value: 800},
  {title: '825', value: 825},
  {title: '862.5', value: 862.5},
  {title: '900', value: 900},
  {title: '950', value: 950},
  {title: '1000', value: 1000},
  {title: '1050', value: 1050},
  {title: '1100', value: 1100},
  {title: '1150', value: 1150},
  {title: '1200', value: 1200},
  {title: '1250', value: 1250},
  {title: '1300', value: 1300},
  {title: '1350', value: 1350},
  {title: '1400', value: 1400},
  {title: '1425', value: 1425},
  {title: '1500', value: 1500},
  {title: '1600', value: 1600},
  {title: '1650', value: 1650},
  {title: '1725', value: 1725},
  {title: '1800', value: 1800},
  {title: '1900', value: 1900},
  {title: '2000', value: 2000},
  {title: '2100', value: 2100},
  {title: '2200', value: 2200},
  {title: '2300', value: 2300},
  {title: '2400', value: 2400}
];

export const mainFormItems: FormFieldItem[] = [
  {title: 'ATK', type: 'input', modelName: ATK, initialValue: 0},
  {title: '職階', type: 'select', modelName: CLASS, selectOptions: classSelectOptions, initialValue: 1},
  {title: '職階克制', type: 'select', modelName: CLASS_INHIBITION, selectOptions: classInhibitionSelectOptions, initialValue: 2},
  {title: '陣營克制', type: 'select', modelName: GROUP_INHIBITION, selectOptions: groupInhibitionSelectOptions, initialValue: 1},
  {title: '寶具顏色', type: 'select', modelName: NP_CARD, selectOptions: cardSelectOptions, initialValue: 1.5},
  {title: '寶具倍率(%)', type: 'input', modelName: NP_POWER, initialValue: 0, options: npPowerOptions}
];

export const subFormItems: FormFieldItem[] = [
  {title: '禮裝ATK', type: 'input', modelName: EQUIPMENT_ATK, initialValue: 0, options: equipmentAtkOptions},
  {title: 'ATK Buff(%)', type: 'input', modelName: ATK_BUFF, initialValue: 0, tooltip: '攻擊力Buff — 敵方防禦力Buff — 敵方特防威力Buff'},
  {title: '色卡 Buff(%)', type: 'input', modelName: CARD_BUFF, initialValue: 0, tooltip: '色卡Buff — 敵方色卡耐性Buff'},
  {title: '寶具威力 Buff(%)', type: 'input', modelName: NP_BUFF, initialValue: 0},
  {title: '特攻威力 Buff(%)', type: 'input', modelName: SPECIAL_BUFF, initialValue: 0},
  {title: '寶具特攻 Buff(%)', type: 'input', modelName: SPECIAL_NP_BUFF, initialValue: 100},
  {title: '固定傷害 Buff', type: 'input', modelName: FIXED_BUFF, initialValue: 0}
];

export const displayedColumns: string[] = [MAX_DAMAGE, MIN_DAMAGE, AVG_DAMAGE, REMOVE];
