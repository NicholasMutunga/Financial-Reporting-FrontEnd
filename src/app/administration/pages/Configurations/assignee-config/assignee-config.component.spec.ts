import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigneeConfigComponent } from './assignee-config.component';

describe('AssigneeConfigComponent', () => {
  let component: AssigneeConfigComponent;
  let fixture: ComponentFixture<AssigneeConfigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigneeConfigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AssigneeConfigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
