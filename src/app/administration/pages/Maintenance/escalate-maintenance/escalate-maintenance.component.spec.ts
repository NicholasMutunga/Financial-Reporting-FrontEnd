import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalateMaintenanceComponent } from './escalate-maintenance.component';

describe('EscalateMaintenanceComponent', () => {
  let component: EscalateMaintenanceComponent;
  let fixture: ComponentFixture<EscalateMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalateMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalateMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
