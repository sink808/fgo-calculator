import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakaraguComponent } from './takaragu.component';

describe('TakaraguComponent', () => {
  let component: TakaraguComponent;
  let fixture: ComponentFixture<TakaraguComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakaraguComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakaraguComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
