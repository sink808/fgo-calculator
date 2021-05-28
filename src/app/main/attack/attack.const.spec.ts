
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
  AVG_DAMAGE
} from '@main/main.const';
import {
  CARD,
  CARD_ORDER,
  FIRST_CARD,
  BUSTER_CHAIN,
  IS_CRITICAL,
  CRITICAL_BUFF,
  AtkCalculateCase
} from '@main/attack/attack.const';

const case1: AtkCalculateCase = {input: {
  [ATK]: 12465,
  [CLASS]: 0,
  [CLASS_INHIBITION]: 1,
  [GROUP_INHIBITION]: 2,
  [CARD]: 0,
  [CARD_ORDER]: 0,
  [FIRST_CARD]: 0,
  [BUSTER_CHAIN]: 0,
  [EQUIPMENT_ATK]: 0,
  [ATK_BUFF]: 10,
  [CARD_BUFF]: 50,
  [SPECIAL_BUFF]: 0,
  [IS_CRITICAL]: 0,
  [CRITICAL_BUFF]: 20,
  [FIXED_BUFF]: 400,
}, result: {
  [ATK]: 12465,
  [CLASS]: 'Saber',
  [CLASS_INHIBITION]: '普通克制',
  [GROUP_INHIBITION]: '被克制',
  [CARD]: 'Buster(紅)',
  [CARD_ORDER]: '第1張',
  [FIRST_CARD]: 'Buster(紅)',
  [BUSTER_CHAIN]: '是',
  [EQUIPMENT_ATK]: 0,
  [ATK_BUFF]: 10,
  [CARD_BUFF]: 50,
  [SPECIAL_BUFF]: 0,
  [IS_CRITICAL]: '是',
  [CRITICAL_BUFF]: 20,
  [FIXED_BUFF]: 400,
  [MAX_DAMAGE]: 44104,
  [MIN_DAMAGE]: 36611,
  [AVG_DAMAGE]: 40358
}};

const case2: AtkCalculateCase = {input: {
  [ATK]: 11465,
  [CLASS]: 1,
  [CLASS_INHIBITION]: 0,
  [GROUP_INHIBITION]: 1,
  [CARD]: 3,
  [CARD_ORDER]: 3,
  [FIRST_CARD]: 1,
  [BUSTER_CHAIN]: 1,
  [EQUIPMENT_ATK]: 2000,
  [ATK_BUFF]: 40,
  [CARD_BUFF]: 20,
  [SPECIAL_BUFF]: 30,
  [IS_CRITICAL]: 1,
  [CRITICAL_BUFF]: 10,
  [FIXED_BUFF]: 0,
}, result: {
  [ATK]: 11465,
  [CLASS]: 'Archer',
  [CLASS_INHIBITION]: '非克制',
  [GROUP_INHIBITION]: '無克制',
  [CARD]: 'Extra Attack(前三張同色)',
  [CARD_ORDER]: '第4張(Extra Attack)',
  [FIRST_CARD]: '非Buster(紅)',
  [BUSTER_CHAIN]: '否',
  [EQUIPMENT_ATK]: 2000,
  [ATK_BUFF]: 40,
  [CARD_BUFF]: 20,
  [SPECIAL_BUFF]: 30,
  [IS_CRITICAL]: '否',
  [CRITICAL_BUFF]: 10,
  [FIXED_BUFF]: 0,
  [MAX_DAMAGE]: 24738,
  [MIN_DAMAGE]: 20240,
  [AVG_DAMAGE]: 22489
}};

const case3: AtkCalculateCase = {input: {
  [ATK]: 12668,
  [CLASS]: 11,
  [CLASS_INHIBITION]: 2,
  [GROUP_INHIBITION]: 2,
  [CARD]: 2,
  [CARD_ORDER]: 1,
  [FIRST_CARD]: 0,
  [BUSTER_CHAIN]: 1,
  [EQUIPMENT_ATK]: 1000,
  [ATK_BUFF]: 0,
  [CARD_BUFF]: 0,
  [SPECIAL_BUFF]: 0,
  [IS_CRITICAL]: 1,
  [CRITICAL_BUFF]: 0,
  [FIXED_BUFF]: 0,
}, result: {
  [ATK]: 12668,
  [CLASS]: 'Alterego',
  [CLASS_INHIBITION]: '狂階克制 or AlterEgo克制下三騎',
  [GROUP_INHIBITION]: '被克制',
  [CARD]: 'Quick(綠)',
  [CARD_ORDER]: '第2張',
  [FIRST_CARD]: 'Buster(紅)',
  [BUSTER_CHAIN]: '否',
  [EQUIPMENT_ATK]: 1000,
  [ATK_BUFF]: 0,
  [CARD_BUFF]: 0,
  [SPECIAL_BUFF]: 0,
  [IS_CRITICAL]: '否',
  [CRITICAL_BUFF]: 0,
  [FIXED_BUFF]: 0,
  [MAX_DAMAGE]: 6815,
  [MIN_DAMAGE]: 5576,
  [AVG_DAMAGE]: 6196
}};

export const atkCalculateTestCases: AtkCalculateCase[] = [
  case1,
  case2,
  case3
];