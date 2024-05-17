import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneeLookupComponent } from './assignee-lookup.component';

describe('AssigneeLookupComponent', () => {
  let component: AssigneeLookupComponent;
  let fixture: ComponentFixture<AssigneeLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigneeLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigneeLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
