import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TakaraguComponent } from './takaragu/takaragu.component';
import { AttackComponent } from './attack/attack.component';
import { NpComponent } from './np/np.component';
import { MatModule } from '../shareModule/mat.module';
import { FormFieldsComponent } from './component/form-fields/form-fields.component';

const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
      { path: '', redirectTo: 'takaragu' },
      { path: 'takaragu', component: TakaraguComponent, data: { label: '寶具傷害計算' } },
      { path: 'attack', component: AttackComponent, data: { label: '指令卡傷害計算' } },
      { path: 'np', component: NpComponent, data: { label: 'np值計算' } }
    ]
  }
];
@NgModule({
  imports: [
    CommonModule,
    MatModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MainComponent,
    TakaraguComponent,
    AttackComponent,
    NpComponent,
    FormFieldsComponent
  ]
})
export class MainModule { }
