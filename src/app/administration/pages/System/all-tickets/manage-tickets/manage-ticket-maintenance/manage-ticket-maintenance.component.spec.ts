import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTicketMaintenanceComponent } from './manage-ticket-maintenance.component';

describe('ManageTicketMaintenanceComponent', () => {
  let component: ManageTicketMaintenanceComponent;
  let fixture: ComponentFixture<ManageTicketMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTicketMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTicketMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
