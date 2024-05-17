import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaqLookupComponent } from './faq-lookup.component';

describe('FaqLookupComponent', () => {
  let component: FaqLookupComponent;
  let fixture: ComponentFixture<FaqLookupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaqLookupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaqLookupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
