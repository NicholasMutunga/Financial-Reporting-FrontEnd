import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignTicketComponent } from './data-input-management.component';

describe('AssignTicketComponent', () => {
  let component: AssignTicketComponent;
  let fixture: ComponentFixture<AssignTicketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AssignTicketComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AssignTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
