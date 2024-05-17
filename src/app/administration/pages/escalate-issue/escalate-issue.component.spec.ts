import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscalateIssueComponent } from './escalate-issue.component';

describe('EscalateIssueComponent', () => {
  let component: EscalateIssueComponent;
  let fixture: ComponentFixture<EscalateIssueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EscalateIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EscalateIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
