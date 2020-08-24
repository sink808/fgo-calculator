import { Component } from '@angular/core';
import { MainService } from '../main.service';
import { FormFieldItem } from '../component/form-fields/form-fields.const';
import { ColModel } from '../component/table/table.const';
import {
  CARD,
  CARD_ORDER,
  FIRST_CARD,
  BUSTER_CHAIN,
  IS_CRITICAL,
  CRITICAL_BUFF,
  AtkModels,
  AtkColModels,
  mainFormItems,
  subFormItems,
  displayedColumns,
  cardDmgSelectOptions,
  cardOrderSelectOptions,
  firstCardSelectOptions,
  busterChainSelectOptions,
  isCriticalSelectOptions } from './attack.const';
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
  groupInhibitionSelectOptions } from '../main.const';
@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent {
  public mainFormItems: FormFieldItem[] = mainFormItems;
  public subFormItems: FormFieldItem[] = subFormItems;
  public damageList: AtkColModels[] = []; // all cols value for table
  public colModels: ColModel[] = this.getColModels(); // table cols title and key
  public displayedColumns: string[] = displayedColumns; // table main cols key
  constructor(
    private mainService: MainService) {
  }

  private getColModels(): ColModel[] {
    const model = [];
    this.mainFormItems.forEach((item) => model.push({title: item.title, key: item.modelName}));
    this.subFormItems.forEach((item) => model.push({title: item.title, key: item.modelName}));
    model.push(
      { title: '最大傷害', key: MAX_DAMAGE },
      { title: '最小傷害', key: MIN_DAMAGE },
      { title: '平均傷害', key: AVG_DAMAGE }
    );
    return model;
  }

  public calculate(value: AtkModels): void {
    /* 公式 =
    ATK ×
    攻擊補正 ×
    [ 卡牌傷害倍率 × 位置加成 × ( 1 + 卡牌BUFF ) + 首位加成 ] ×
    職階補正 ×
    職階相性補正 ×
    陣營相性補正 ×
    亂數補正 ×
    ( 1 + 攻擊力BUFF — 敵方防禦力BUFF — 敵方特防威力BUFF ) ×
    ( 1 + 特攻威力BUFF + 暴擊威力BUFF ) ×
    暴擊補正 ×
    EX攻擊獎勵 +
    ( 固定傷害BUFF — 敵方固定傷害BUFF ) +
    ATK × Buster Chain加成
    */

    const atk: number = (value[ATK] + value[EQUIPMENT_ATK]);
    const classValue: number = value[CLASS];
    const classInhibition: number = value[CLASS_INHIBITION];
    const groupInhibition: number = value[GROUP_INHIBITION];
    const atkBuff: number = (1 + (value[ATK_BUFF] / 100));
    const card: number = (value[CARD] === 2 || value[CARD] === 3.5) ? 1 : value[CARD];
    const cardOrder: number = (value[CARD_ORDER] === 0) ? 1 : value[CARD_ORDER];
    const cardBuff: number = card * cardOrder * (1 + value[CARD_BUFF] / 100) + value[FIRST_CARD];
    const critical: number = value[IS_CRITICAL];
    const criticalBuff: number = (value[IS_CRITICAL] === 1) ? 0 : (value[CRITICAL_BUFF] / 100);
    const specialBuff: number = (1 + (value[SPECIAL_BUFF] / 100) + criticalBuff);
    const exBuff: number = (value[CARD] !== 2 && value[CARD] !== 3.5) ? 1 : value[CARD];
    const correction = 0.23;
    const maxRandomNum = 1.1;
    const minRandomNum = 0.9;
    const fixedValue: number = value[FIXED_BUFF];
    const busterChain: number = atk * value[BUSTER_CHAIN];
    const normalValue: number = atk * correction * cardBuff * classValue * classInhibition *
      groupInhibition * atkBuff * specialBuff * critical * exBuff;
    const col: AtkColModels = modelsToColModels.call(this);

    this.damageList = [col, ...this.damageList]; // for @Input change

    function modelsToColModels(): AtkColModels {
      return {
        [ATK]: value[ATK],
        [CLASS]: this.mainService.getOptionTitle(value[CLASS], classSelectOptions),
        [CLASS_INHIBITION]: this.mainService.getOptionTitle(value[CLASS_INHIBITION], classInhibitionSelectOptions),
        [GROUP_INHIBITION]: this.mainService.getOptionTitle(value[GROUP_INHIBITION], groupInhibitionSelectOptions),
        [CARD]: this.mainService.getOptionTitle(value[CARD], cardDmgSelectOptions),
        [CARD_ORDER]: this.mainService.getOptionTitle(value[CARD_ORDER], cardOrderSelectOptions),
        [FIRST_CARD]: this.mainService.getOptionTitle(value[FIRST_CARD], firstCardSelectOptions),
        [BUSTER_CHAIN]: this.mainService.getOptionTitle(value[BUSTER_CHAIN], busterChainSelectOptions),
        [EQUIPMENT_ATK]: value[EQUIPMENT_ATK],
        [ATK_BUFF]: value[ATK_BUFF],
        [CARD_BUFF]: value[CARD_BUFF],
        [SPECIAL_BUFF]: value[SPECIAL_BUFF],
        [IS_CRITICAL]: this.mainService.getOptionTitle(value[IS_CRITICAL], isCriticalSelectOptions),
        [CRITICAL_BUFF]: value[CRITICAL_BUFF],
        [FIXED_BUFF]: value[FIXED_BUFF],
        [MAX_DAMAGE]: normalValue * maxRandomNum + fixedValue + busterChain,
        [MIN_DAMAGE]: normalValue * minRandomNum + fixedValue + busterChain,
        [AVG_DAMAGE]: normalValue + fixedValue + busterChain
      };
    }
  }
}
