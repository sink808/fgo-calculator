import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttackComponent } from './attack.component';
import { atkCalculateTestCases } from '@main/attack/attack.const.spec';
import { AtkCalculateCase } from '@main/attack/attack.const';
describe('AttackComponent', () => {
  let component: AttackComponent;
  let fixture: ComponentFixture<AttackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('atk calculate', () => {
    atkCalculateTestCases.forEach((test, index) => {
      it(`should atkCalculateTestCase${index + 1} correctly`, () => {
        expect(component.calculate(test.input)).toEqual(test.result);
      });
    });
  });
});
