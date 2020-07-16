import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormFieldItem } from '../component/form-fields/form-fields.const';
import * as t from './takaragu.const';
import { TakaraguModels } from './takaragu.const';

@Component({
  selector: 'app-takaragu',
  templateUrl: './takaragu.component.html',
  styleUrls: ['./takaragu.component.scss']
})
export class TakaraguComponent implements OnInit {
  public mainFormItems: FormFieldItem[] = t.mainFormItems;
  public subFormItems: FormFieldItem[] = t.subFormItems;
  public damageList: TakaraguModels[] = [];
  constructor(
    private title: Title) {
    this.title.setTitle('寶具傷害計算');
  }

  ngOnInit(): void {

  }

  public calculate(value: TakaraguModels): void {
    const atk: number = (value[t.ATK] + value[t.EQUIPMENT_ATK]);
    const npCard: number = ((value[t.NP_POWER] / 100) * value[t.NP_CARD] * (1 + value[t.CARD_BUFF] / 100));
    const classValue: number = value[t.CLASS];
    const classInhibition: number = value[t.CLASS_INHIBITION];
    const groupInhibition: number = value[t.GROUP_INHIBITION];
    const atkBuff: number = (1 + (value[t.ATK_BUFF] / 100));
    const npBuff: number = (1 + (value[t.SPECIAL_BUFF] / 100) + (value[t.NP_BUFF] / 100) );
    const specialNpBuff: number = (value[t.SPECIAL_NP_BUFF] / 100);
    const correction = 0.23;
    const maxRandomNum = 1.1;
    const minRandomNum = 0.9;
    const fixedValue: number = value[t.FIXED_BUFF];
    const normalValue: number = atk * correction * npCard * classValue * classInhibition *
    groupInhibition * atkBuff * npBuff * specialNpBuff;
    this.damageList.push(
      {
        [t.MAX_DAMAGE]: normalValue * maxRandomNum + fixedValue,
        [t.MIN_DAMAGE]: normalValue * minRandomNum + fixedValue,
        [t.AVG_DAMAGE]: normalValue * 1 + fixedValue,
        ...value
      }
    );

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
  }

}
