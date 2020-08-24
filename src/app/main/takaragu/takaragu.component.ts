import { Component } from '@angular/core';
import { FormFieldItem } from '../component/form-fields/form-fields.const';
import { ColModel } from '../component/table/table.const';
import { MainService } from '../main.service';
import {
  NP_CARD,
  NP_POWER,
  NP_BUFF,
  SPECIAL_NP_BUFF,
  TakaraguModels,
  TakaraguColModels,
  mainFormItems,
  subFormItems,
  displayedColumns } from './takaragu.const';
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
  cardSelectOptions } from '../main.const';

@Component({
  selector: 'app-takaragu',
  templateUrl: './takaragu.component.html',
  styleUrls: ['./takaragu.component.scss']
})
export class TakaraguComponent {
  public mainFormItems: FormFieldItem[] = mainFormItems;
  public subFormItems: FormFieldItem[] = subFormItems;
  public damageList: TakaraguColModels[] = []; // all cols value for table
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

  public calculate(value: TakaraguModels): void {
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
    const atk: number = (value[ATK] + value[EQUIPMENT_ATK]);
    const npCard: number = ((value[NP_POWER] / 100) * value[NP_CARD] * (1 + value[CARD_BUFF] / 100));
    const classValue: number = value[CLASS];
    const classInhibition: number = value[CLASS_INHIBITION];
    const groupInhibition: number = value[GROUP_INHIBITION];
    const atkBuff: number = (1 + (value[ATK_BUFF] / 100));
    const npBuff: number = (1 + (value[SPECIAL_BUFF] / 100) + (value[NP_BUFF] / 100) );
    const specialNpBuff: number = (value[SPECIAL_NP_BUFF] / 100);
    const correction = 0.23;
    const maxRandomNum = 1.1;
    const minRandomNum = 0.9;
    const fixedValue: number = value[FIXED_BUFF];
    const normalValue: number = atk * correction * npCard * classValue * classInhibition *
    groupInhibition * atkBuff * npBuff * specialNpBuff;
    // 轉換為table要顯示的值
    const col: TakaraguColModels = modelsToColModels.call(this);

    this.damageList  = [col, ...this.damageList]; // for @Input change

    function modelsToColModels(): TakaraguColModels {
      return {
        [ATK]: value[ATK],
        [CLASS]: this.mainService.getOptionTitle(value[CLASS], classSelectOptions),
        [CLASS_INHIBITION]: this.mainService.getOptionTitle(value[CLASS_INHIBITION], classInhibitionSelectOptions),
        [GROUP_INHIBITION]: this.mainService.getOptionTitle(value[GROUP_INHIBITION], groupInhibitionSelectOptions),
        [NP_CARD]: this.mainService.getOptionTitle(value[NP_CARD], cardSelectOptions),
        [NP_POWER]: value[NP_POWER],
        [EQUIPMENT_ATK]: value[EQUIPMENT_ATK],
        [ATK_BUFF]: value[ATK_BUFF],
        [CARD_BUFF]: value[CARD_BUFF],
        [NP_BUFF]: value[NP_BUFF],
        [SPECIAL_BUFF]: value[SPECIAL_BUFF],
        [SPECIAL_NP_BUFF]: value[SPECIAL_NP_BUFF],
        [FIXED_BUFF]: value[FIXED_BUFF],
        [MAX_DAMAGE]: normalValue * maxRandomNum + fixedValue,
        [MIN_DAMAGE]: normalValue * minRandomNum + fixedValue,
        [AVG_DAMAGE]: normalValue * 1 + fixedValue,
      };
    }
  }

}
