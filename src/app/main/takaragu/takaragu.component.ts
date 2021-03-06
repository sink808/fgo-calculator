import { Component } from '@angular/core';
import { FormFieldItem } from '@component/form-fields/form-fields.const';
import { ColModel } from '@component/table/table.const';
import { MainService } from '@main/main.service';
import {
  NP_CARD,
  NP_POWER,
  NP_BUFF,
  SPECIAL_NP_BUFF,
  TakaraguModels,
  TakaraguColModels,
  mainFormItems,
  subFormItems } from '@main/takaragu/takaragu.const';
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
  selector: 'app-takaragu',
  templateUrl: './takaragu.component.html',
  styleUrls: ['./takaragu.component.scss']
})
export class TakaraguComponent {
  public mainFormItems: FormFieldItem[] = mainFormItems;
  public subFormItems: FormFieldItem[] = subFormItems;
  public damageList: TakaraguColModels[] = []; // all cols value for table
  public displayedColModels: ColModel[] = displayedColModels; // table main cols title and key
  public displayedColumns: string[] = this.displayedColModels.map((model) => model.key); // table main cols key
  public colModels: ColModel[] = this.mainService.getColModels(
    [...this.mainFormItems, ...this.subFormItems],
    this.displayedColModels
  ); // table cols title and key
  constructor(
    private mainService: MainService) {
  }

  public calculate(inputModel: TakaraguModels): TakaraguColModels{
     /* 公式 =
    ATK ×
    攻擊補正 ×
    [ 寶具倍率 × 卡牌傷害倍率 × ( 1 + 卡牌BUFF ) ] ×
    職階補正 ×
    職階相性補正 ×
    陣營相性補正 ×
    亂數補正 ×
    ( 1 + 攻擊力BUFF — 敵方防禦力BUFF — 敵方特防威力BUFF ) ×
    ( 1 + 特攻威力BUFF + 寶具威力BUFF ) ×
    寶具特攻 +
    ( 固定傷害BUFF — 敵方固定傷害BUFF )
    */
    // 公式相關
    const model: TakaraguModels = this.mainService.indexToValue(inputModel, [...this.mainFormItems, ...this.subFormItems]);

    const atk: number = (model[ATK] + model[EQUIPMENT_ATK]);
    const npCard: number = ((model[NP_POWER] / 100) * +model[NP_CARD] * (1 + model[CARD_BUFF] / 100));
    const classValue: number = +model[CLASS];
    const classInhibition: number = +model[CLASS_INHIBITION];
    const groupInhibition: number = +model[GROUP_INHIBITION];
    const atkBuff: number = (1 + (model[ATK_BUFF] / 100));
    const npBuff: number = (1 + (model[SPECIAL_BUFF] / 100) + (model[NP_BUFF] / 100) );
    const specialNpBuff: number = (model[SPECIAL_NP_BUFF] / 100);
    const correction = 0.23;
    const maxRandomNum = 1.1;
    const minRandomNum = 0.9;
    const fixedValue: number = model[FIXED_BUFF];
    const normalValue: number = atk * correction * npCard * classValue * classInhibition *
    groupInhibition * atkBuff * npBuff * specialNpBuff;
    // 轉換為table要顯示的值
    const displayedCol = {
      [MAX_DAMAGE]: Math.floor(normalValue * maxRandomNum + fixedValue),
      [MIN_DAMAGE]: Math.floor(normalValue * minRandomNum + fixedValue),
      [AVG_DAMAGE]: Math.floor(normalValue * 1 + fixedValue),
    };
    const colModel: TakaraguColModels = { ...inputModel, ...displayedCol };
    const col: TakaraguColModels = this.mainService.indexToTitle(colModel, [...this.mainFormItems, ...this.subFormItems]);
    return col;
  }

  public addResToList(inputModel: TakaraguModels): void {
    const col: TakaraguColModels = this.calculate(inputModel);
    this.damageList = [col, ...this.damageList]; // for @Input change
  }

}
