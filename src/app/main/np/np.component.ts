import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-np',
  templateUrl: './np.component.html',
  styleUrls: ['./np.component.scss']
})
export class NpComponent implements OnInit {

  constructor(private title: Title) {
    this.title.setTitle('np值計算');
  }

  ngOnInit(): void {
  }

}
