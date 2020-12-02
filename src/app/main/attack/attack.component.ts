import { Component } from '@angular/core';
import { MainService } from '@main/main.service';
import { FormFieldItem } from '@component/form-fields/form-fields.const';
import { ColModel } from '@component/table/table.const';
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
  subFormItems } from '@main/attack/attack.const';
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
  displayedColModels } from '@main/main.const';
@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent {
  public mainFormItems: FormFieldItem[] = mainFormItems;
  public subFormItems: FormFieldItem[] = subFormItems;
  public damageList: AtkColModels[] = []; // all cols value for table
  public displayedColModels: ColModel[] = displayedColModels; // table main cols title and key
  public displayedColumns: string[] = this.displayedColModels.map((model) => model.key); // table main cols key
  public colModels: ColModel[] =
    this.mainService.getColModels( [...this.mainFormItems, ...this.subFormItems], this.displayedColModels); // table cols title and key
  constructor(
    private mainService: MainService) {
  }

  public calculate(inputModel: AtkModels): AtkColModels {
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
    const model: AtkModels = this.mainService.indexToValue(inputModel, [...this.mainFormItems, ...this.subFormItems]);

    const atk: number = (model[ATK] + model[EQUIPMENT_ATK]);
    const classValue: number = +model[CLASS];
    const classInhibition: number = +model[CLASS_INHIBITION];
    const groupInhibition: number = +model[GROUP_INHIBITION];
    const atkBuff: number = (1 + (model[ATK_BUFF] / 100));
    const card: number = (model[CARD] === 2 || model[CARD] === 3.5) ? 1 : +model[CARD];
    const cardOrder: number = (model[CARD_ORDER] === 0) ? 1 : +model[CARD_ORDER];
    const cardBuff: number = card * cardOrder * (1 + model[CARD_BUFF] / 100) + +model[FIRST_CARD];
    const critical: number = +model[IS_CRITICAL];
    const criticalBuff: number = (model[IS_CRITICAL] === 1) ? 0 : (model[CRITICAL_BUFF] / 100);
    const specialBuff: number = (1 + (model[SPECIAL_BUFF] / 100) + criticalBuff);
    const exBuff: number = (model[CARD] !== 2 && model[CARD] !== 3.5) ? 1 : +model[CARD];
    const correction = 0.23;
    const maxRandomNum = 1.1;
    const minRandomNum = 0.9;
    const fixedValue: number = model[FIXED_BUFF];
    const busterChain: number = atk * +model[BUSTER_CHAIN];
    const normalValue: number = atk * correction * cardBuff * classValue * classInhibition *
      groupInhibition * atkBuff * specialBuff * critical * exBuff;
    const displayedCol = {
      [MAX_DAMAGE]: Math.floor(normalValue * maxRandomNum + fixedValue + busterChain),
      [MIN_DAMAGE]: Math.floor(normalValue * minRandomNum + fixedValue + busterChain),
      [AVG_DAMAGE]: Math.floor(normalValue * 1 + fixedValue + busterChain)
    };
    const colModel: AtkColModels = {...inputModel, ...displayedCol };
    const col: AtkColModels = this.mainService.indexToTitle(colModel, [...this.mainFormItems, ...this.subFormItems]);
    return col;
  }

  public addResToList(inputModel: AtkModels): void {
    const col: AtkColModels = this.calculate(inputModel);
    this.damageList = [col, ...this.damageList]; // for @Input change
  }
}
