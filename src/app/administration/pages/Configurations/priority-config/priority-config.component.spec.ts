import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriorityConfigComponent } from './priority-config.component';

describe('PriorityConfigComponent', () => {
  let component: PriorityConfigComponent;
  let fixture: ComponentFixture<PriorityConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriorityConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PriorityConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
