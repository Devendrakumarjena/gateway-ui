import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RS232Component } from './rs232.component';

describe('RS232Component', () => {
  let component: RS232Component;
  let fixture: ComponentFixture<RS232Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RS232Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RS232Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
