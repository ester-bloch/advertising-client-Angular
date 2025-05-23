import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayDetailsComponent } from './pay-details.component';

describe('PayDetailsComponent', () => {
  let component: PayDetailsComponent;
  let fixture: ComponentFixture<PayDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
