import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HwLes2Component } from './hw-les2.component';

describe('HwLes2Component', () => {
  let component: HwLes2Component;
  let fixture: ComponentFixture<HwLes2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HwLes2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HwLes2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
