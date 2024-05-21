import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsidaryLookupComponent } from './subsidary-lookup.component';

describe('SubsidaryLookupComponent', () => {
  let component: SubsidaryLookupComponent;
  let fixture: ComponentFixture<SubsidaryLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubsidaryLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsidaryLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
