import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalateLookupComponent } from './escalate-lookup.component';

describe('EscalateLookupComponent', () => {
  let component: EscalateLookupComponent;
  let fixture: ComponentFixture<EscalateLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalateLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalateLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
