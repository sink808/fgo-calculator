import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFieldsComponent } from './form-fields.component';
import { ReactiveFormsModule } from '@angular/forms';
describe('FormFieldsComponent', () => {
  let component: FormFieldsComponent;
  let fixture: ComponentFixture<FormFieldsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ FormFieldsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
