import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-attack',
  templateUrl: './attack.component.html',
  styleUrls: ['./attack.component.scss']
})
export class AttackComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('指令卡傷害計算');
  }

  ngOnInit(): void {
  }

}
