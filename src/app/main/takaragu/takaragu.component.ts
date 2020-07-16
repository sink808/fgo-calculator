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

  constructor(
    private title: Title) {
    this.title.setTitle('寶具傷害計算');
  }

  ngOnInit(): void {

  }

  public calculate(value: TakaraguModels): void {
    /* ATK ×
    攻擊補正 ×
    [ 寶具倍率 × 卡牌傷害倍率 × ( 1 + 卡牌BUFF ) ] ×
    職階補正 ×
    職階相性補正 ×
    陣營相性補正 ×
    亂數補正 ×
    ( 1 +攻擊力BUFF —敵方防禦力BUFF —敵方特防威力BUFF ) ×
    ( 1 + 特攻威力BUFF + 寶具威力BUFF ) ×
    寶具特攻 + ( 固定傷害BUFF — 敵方固定傷害BUFF )
    */

    console.log(value);
  }

}
