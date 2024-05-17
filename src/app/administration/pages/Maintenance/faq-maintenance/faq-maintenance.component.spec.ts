import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQMaintenanceComponent } from './faq-maintenance.component';

describe('FAQMaintenanceComponent', () => {
  let component: FAQMaintenanceComponent;
  let fixture: ComponentFixture<FAQMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAQMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
