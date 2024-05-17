import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTicketLookupComponent } from './manage-ticket-lookup.component';

describe('ManageTicketLookupComponent', () => {
  let component: ManageTicketLookupComponent;
  let fixture: ComponentFixture<ManageTicketLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageTicketLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageTicketLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
