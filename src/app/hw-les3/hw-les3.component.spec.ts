import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwLes3Component } from './hw-les3.component';

describe('HwLes3Component', () => {
  let component: HwLes3Component;
  let fixture: ComponentFixture<HwLes3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwLes3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HwLes3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
