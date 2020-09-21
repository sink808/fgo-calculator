import { SelectOption } from '@component/form-fields/form-fields.const';
import { ColModel } from '@component/table/table.const';

export const ATK = 'atk';
export const CLASS = 'class';
export const CLASS_INHIBITION = 'classInhibition';
export const GROUP_INHIBITION = 'groupInhibition';
export const EQUIPMENT_ATK = 'equipmentAtk';
export const ATK_BUFF = 'atkBuff';
export const CARD_BUFF = 'cardBuff';
export const SPECIAL_BUFF = 'specialBuff';
export const FIXED_BUFF = 'fixedBuff';
export const MAX_DAMAGE = 'maxDamage';
export const MIN_DAMAGE = 'minDamage';
export const AVG_DAMAGE = 'avgDamage';
export const REMOVE = 'remove';
export const SELECT = 'select';
export const INPUT = 'input';

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

export const equipmentAtkOptions: SelectOption[] = [
  {title: '786(lv20 寶石翁)', value: 786},
  {title: '943(lv20 黑杯)', value: 943},
  {title: '1089(lv40 寶石翁)', value: 1089},
  {title: '1307(lv40 黑杯)', value: 1307},
  {title: '2000(lv100 寶石翁)', value: 2000},
  {title: '2400(lv100 黑杯)', value: 2400}
];

export const displayedColModels: ColModel[] = [
  {title: '最大傷害', key: MAX_DAMAGE},
  {title: '最小傷害', key: MIN_DAMAGE},
  {title: '平均傷害', key: AVG_DAMAGE},
  {title: '', key: REMOVE}
];
