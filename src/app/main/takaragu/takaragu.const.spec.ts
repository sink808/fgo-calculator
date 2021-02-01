
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
  NP_CARD,
  NP_POWER,
  NP_BUFF,
  SPECIAL_NP_BUFF,
  TakaraguCalculateCase
} from '@main/takaragu/takaragu.const';

const case1: TakaraguCalculateCase = {input: {
  [ATK]: 12465,
  [CLASS]: 0,
  [CLASS_INHIBITION]: 0,
  [GROUP_INHIBITION]: 0,
  [NP_CARD]: 0,
  [NP_POWER]: 300,
  [EQUIPMENT_ATK]: 0,
  [ATK_BUFF]: 12,
  [CARD_BUFF]: 10,
  [NP_BUFF]: 10,
  [SPECIAL_BUFF]: 0,
  [SPECIAL_NP_BUFF]: 100,
  [FIXED_BUFF]: 0
}, result: {
  [ATK]: 12465,
  [CLASS]: 'Saber',
  [CLASS_INHIBITION]: '非克制',
  [GROUP_INHIBITION]: '克制',
  [NP_CARD]: 'Buster(紅)',
  [NP_POWER]: 300,
  [EQUIPMENT_ATK]: 0,
  [ATK_BUFF]: 12,
  [CARD_BUFF]: 10,
  [NP_BUFF]: 10,
  [SPECIAL_BUFF]: 0,
  [SPECIAL_NP_BUFF]: 100,
  [FIXED_BUFF]: 0,
  [MAX_DAMAGE]: 21155,
  [MIN_DAMAGE]: 17308,
  [AVG_DAMAGE]: 19232
}};

const case2: TakaraguCalculateCase = {input: {
  [ATK]: 13668,
  [CLASS]: 11,
  [CLASS_INHIBITION]: 2,
  [GROUP_INHIBITION]: 1,
  [NP_CARD]: 1,
  [NP_POWER]: 450,
  [EQUIPMENT_ATK]: 2000,
  [ATK_BUFF]: 30,
  [CARD_BUFF]: 30,
  [NP_BUFF]: 0,
  [SPECIAL_BUFF]: 0,
  [SPECIAL_NP_BUFF]: 100,
  [FIXED_BUFF]: 0
}, result: {
  [ATK]: 13668,
  [CLASS]: 'Alterego',
  [CLASS_INHIBITION]: '狂階克制 or AlterEgo克制下三騎',
  [GROUP_INHIBITION]: '無克制',
  [NP_CARD]: 'Arts(藍)',
  [NP_POWER]: 450,
  [EQUIPMENT_ATK]: 2000,
  [ATK_BUFF]: 30,
  [CARD_BUFF]: 30,
  [NP_BUFF]: 0,
  [SPECIAL_BUFF]: 0,
  [SPECIAL_NP_BUFF]: 100,
  [FIXED_BUFF]: 0,
  [MAX_DAMAGE]: 45219,
  [MIN_DAMAGE]: 36997,
  [AVG_DAMAGE]: 41108
}};

const case3: TakaraguCalculateCase = {input: {
  [ATK]: 14100,
  [CLASS]: 10,
  [CLASS_INHIBITION]: 0,
  [GROUP_INHIBITION]: 1,
  [NP_CARD]: 1,
  [NP_POWER]: 600,
  [EQUIPMENT_ATK]: 2000,
  [ATK_BUFF]: 0,
  [CARD_BUFF]: 34,
  [NP_BUFF]: 0,
  [SPECIAL_BUFF]: 0,
  [SPECIAL_NP_BUFF]: 150,
  [FIXED_BUFF]: 175
}, result: {
  [ATK]: 14100,
  [CLASS]: 'Foreigner',
  [CLASS_INHIBITION]: '非克制',
  [GROUP_INHIBITION]: '無克制',
  [NP_CARD]: 'Arts(藍)',
  [NP_POWER]: 600,
  [EQUIPMENT_ATK]: 2000,
  [ATK_BUFF]: 0,
  [CARD_BUFF]: 34,
  [NP_BUFF]: 0,
  [SPECIAL_BUFF]: 0,
  [SPECIAL_NP_BUFF]: 150,
  [FIXED_BUFF]: 175,
  [MAX_DAMAGE]: 49298,
  [MIN_DAMAGE]: 40367,
  [AVG_DAMAGE]: 44833
}};


export const takaraguCalculateTestCases: TakaraguCalculateCase[] = [
 case1,
 case2,
 case3
];
