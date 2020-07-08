import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpComponent } from './np.component';

describe('NpComponent', () => {
  let component: NpComponent;
  let fixture: ComponentFixture<NpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
