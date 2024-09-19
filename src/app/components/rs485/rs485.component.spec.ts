import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RS485Component } from './rs485.component';

describe('RS485Component', () => {
  let component: RS485Component;
  let fixture: ComponentFixture<RS485Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RS485Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RS485Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
