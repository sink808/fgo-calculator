import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { TakaraguComponent } from './takaragu/takaragu.component';
import { AttackComponent } from './attack/attack.component';
import { NpComponent } from './np/np.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [] }
];
@NgModule({
  declarations: [MainComponent, TakaraguComponent, AttackComponent, NpComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MainModule { }
