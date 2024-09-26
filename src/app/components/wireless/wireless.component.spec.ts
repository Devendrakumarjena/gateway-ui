import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WIRELESSComponent } from './wireless.component';

describe('WIRELESSComponent', () => {
  let component: WIRELESSComponent;
  let fixture: ComponentFixture<WIRELESSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WIRELESSComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WIRELESSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
