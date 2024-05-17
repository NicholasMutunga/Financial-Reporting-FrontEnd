import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityLookupComponent } from './priority-lookup.component';

describe('PriorityLookupComponent', () => {
  let component: PriorityLookupComponent;
  let fixture: ComponentFixture<PriorityLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriorityLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
