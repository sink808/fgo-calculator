import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakaraguComponent } from '@main/takaragu/takaragu.component';
import { takaraguCalculateTestCases } from '@main/takaragu/takaragu.const.spec';
import { TakaraguCalculateCase } from '@main/takaragu/takaragu.const';
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

  describe('takaragu calculate', () => {
    takaraguCalculateTestCases.forEach((test, index) => {
      it(`should takaraguCalculateTestCase${index + 1} correctly`, () => {
        expect(component.calculate(test.input)).toEqual(test.result);
      });
    });
  });

});
