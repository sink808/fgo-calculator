import { SelectOption } from './component/form-fields/form-fields.const';

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
