import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from '@main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { TakaraguComponent } from '@main/takaragu/takaragu.component';
import { AttackComponent } from '@main/attack/attack.component';
import { NpComponent } from '@main/np/np.component';
import { MatModule } from '@shareModule/mat.module';
import { FormFieldsComponent } from '@component/form-fields/form-fields.component';
import { TableComponent } from '@component/table/table.component';
import { GetColTitlePipe } from '@component/get-col-title/get-col-title.pipe';
import { MainService } from '@main/main.service';
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
    FormFieldsComponent,
    TableComponent,
    GetColTitlePipe
  ],
  providers: [MainService]
})
export class MainModule { }
