import { SelectOption, FormFieldItem } from '../component/form-fields/form-fields.const';

export const ATK = 'atk';
export const CLASS = 'class';
export const CLASS_INHIBITION = 'classInhibition';
export const GROUP_INHIBITION = 'groupInhibition';
export const NP_CARD = 'npCard';
export const NP_POWER = 'npPower';
export const EQUIPMENT_ATK = 'equipmentAtk';
export const ATK_BUFF = 'atkBuff';
export const CARD_BUFF = 'cardBuff';
export const NP_BUFF = 'npBuff';
export const SPECIAL_BUFF = 'specialBuff';
export const SPECIAL_NP_BUFF = 'specialNpBuff';
export const FIXED_BUFF = 'fixedBuff';

export const MAX_DAMAGE = 'maxDamage';
export const MIN_DAMAGE = 'minDamage';
export const AVG_DAMAGE = 'avgDamage';

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

export const classSelectOptions: SelectOption[] = [
  {title: 'Saber', value: 1},
  {title: 'Archer', value: 0.95},
  {title: 'Lancer', value: 1.05},
  {title: 'Rider', value: 1},
  {title: 'Caster', value: 0.9},
  {title: 'Assassin', value: 0.9},
  {title: 'Berserker', value: 1.1},
  {title: 'Shielder', value: 1},
  {title: 'Ruler', value: 1.1},
  {title: 'Avenger', value: 1.1},
  {title: 'Foreigner ', value: 1},
  {title: 'Alterego ', value: 1},
  {title: 'MoonCancer', value: 1},
  {title: 'Beast', value: 1}
];

export const classInhibitionSelectOptions: SelectOption[] = [
  {title: '非克制', value: 1},
  {title: '普通克制', value: 2},
  {title: '狂階克制 or AlterEgo克制下三騎', value: 1.5},
  {title: '被克制', value: 0.5},
  {title: '克制Beast III', value: 1.2},
];

export const groupInhibitionSelectOptions: SelectOption[] = [
  {title: '克制', value: 1.1},
  {title: '無克制', value: 1},
  {title: '被克制', value: 0.9}
];

export const cardSelectOptions: SelectOption[] = [
  {title: 'Buster(紅)', value: 1.5},
  {title: 'Arts(藍)', value: 1},
  {title: 'Quick(綠)', value: 0.8}
];

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
