import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneeMaintenanceComponent } from './assignee-maintenance.component';

describe('AssigneeMaintenanceComponent', () => {
  let component: AssigneeMaintenanceComponent;
  let fixture: ComponentFixture<AssigneeMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigneeMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigneeMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
