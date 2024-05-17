import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FAQConfigComponent } from './faq-config.component';

describe('FAQConfigComponent', () => {
  let component: FAQConfigComponent;
  let fixture: ComponentFixture<FAQConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FAQConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FAQConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
