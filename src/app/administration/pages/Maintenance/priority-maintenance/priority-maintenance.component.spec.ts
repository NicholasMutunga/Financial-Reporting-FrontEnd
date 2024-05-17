import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityMaintenanceComponent } from './priority-maintenance.component';

describe('PriorityMaintenanceComponent', () => {
  let component: PriorityMaintenanceComponent;
  let fixture: ComponentFixture<PriorityMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityMaintenanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriorityMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
