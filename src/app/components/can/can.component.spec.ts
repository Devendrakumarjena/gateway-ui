import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CANComponent } from './can.component';

describe('CANComponent', () => {
  let component: CANComponent;
  let fixture: ComponentFixture<CANComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CANComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CANComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
