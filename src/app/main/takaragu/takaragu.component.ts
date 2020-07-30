import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormFieldItem } from '../component/form-fields/form-fields.const';
import * as t from './takaragu.const';
import * as m from '../main.const';
import { TakaraguModels, TakaraguColModels } from './takaragu.const';
import { ColModel } from '../component/table/table.const';
import { MainService } from '../main.service';
@Component({
  selector: 'app-takaragu',
  templateUrl: './takaragu.component.html',
  styleUrls: ['./takaragu.component.scss']
})
export class TakaraguComponent implements OnInit {
  public mainFormItems: FormFieldItem[] = t.mainFormItems;
  public subFormItems: FormFieldItem[] = t.subFormItems;
  public damageList: TakaraguColModels[] = []; // all cols value for table
  public colModels: ColModel[] = this.getColModels(); // table cols title and key
  public displayedColumns: string[] = t.displayedColumns; // table main cols key
  constructor(
    private title: Title,
    private mainService: MainService) {
    this.title.setTitle('寶具傷害計算');
  }

  ngOnInit(): void {

  }

  private getColModels(): ColModel[] {
    const model = [];
    this.mainFormItems.forEach((item) => model.push({title: item.title, key: item.modelName}));
    this.subFormItems.forEach((item) => model.push({title: item.title, key: item.modelName}));
    model.push(
      { title: '最大傷害', key: t.MAX_DAMAGE },
      { title: '最小傷害', key: t.MIN_DAMAGE },
      { title: '平均傷害', key: t.AVG_DAMAGE }
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
    // 轉換為table要顯示的值
    const col: TakaraguColModels = modelsToColModels.call(this);

    this.damageList  = [col, ...this.damageList]; // for @Input change

    function modelsToColModels(): TakaraguColModels {
      return {
        [t.ATK]: value[t.ATK],
        [t.CLASS]: this.mainService.getOptionTitle(value[t.CLASS], m.classSelectOptions),
        [t.CLASS_INHIBITION]: this.mainService.getOptionTitle(value[t.CLASS_INHIBITION], m.classInhibitionSelectOptions),
        [t.GROUP_INHIBITION]: this.mainService.getOptionTitle(value[t.GROUP_INHIBITION], m.groupInhibitionSelectOptions),
        [t.NP_CARD]: this.mainService.getOptionTitle(value[t.NP_CARD], m.cardSelectOptions),
        [t.NP_POWER]: value[t.NP_POWER],
        [t.EQUIPMENT_ATK]: value[t.EQUIPMENT_ATK],
        [t.ATK_BUFF]: value[t.ATK_BUFF],
        [t.CARD_BUFF]: value[t.CARD_BUFF],
        [t.NP_BUFF]: value[t.NP_BUFF],
        [t.SPECIAL_BUFF]: value[t.SPECIAL_BUFF],
        [t.SPECIAL_NP_BUFF]: value[t.SPECIAL_NP_BUFF],
        [t.FIXED_BUFF]: value[t.FIXED_BUFF],
        [t.MAX_DAMAGE]: normalValue * maxRandomNum + fixedValue,
        [t.MIN_DAMAGE]: normalValue * minRandomNum + fixedValue,
        [t.AVG_DAMAGE]: normalValue * 1 + fixedValue,
      };
    }
  }

}
