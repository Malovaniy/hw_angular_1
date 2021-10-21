import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwLes1Component } from './hw-les1.component';

describe('HwLes1Component', () => {
  let component: HwLes1Component;
  let fixture: ComponentFixture<HwLes1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwLes1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HwLes1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
