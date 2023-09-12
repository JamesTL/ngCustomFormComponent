import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormDemoComponent } from './reactive-form-demo.component';

describe('ReactiveFormDemoComponent', () => {
  let component: ReactiveFormDemoComponent;
  let fixture: ComponentFixture<ReactiveFormDemoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveFormDemoComponent]
    });
    fixture = TestBed.createComponent(ReactiveFormDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
