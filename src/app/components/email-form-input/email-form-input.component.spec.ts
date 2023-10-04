import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailFormInputComponent } from './email-form-input.component';

describe('EmailFormInputComponent', () => {
  let component: EmailFormInputComponent;
  let fixture: ComponentFixture<EmailFormInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmailFormInputComponent]
    });
    fixture = TestBed.createComponent(EmailFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
