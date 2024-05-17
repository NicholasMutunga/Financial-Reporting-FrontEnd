import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusMaintenanceComponent } from './status-maintenance.component';

describe('StatusMaintenanceComponent', () => {
  let component: StatusMaintenanceComponent;
  let fixture: ComponentFixture<StatusMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
