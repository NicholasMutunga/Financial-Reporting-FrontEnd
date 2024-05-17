import { TestBed } from '@angular/core/testing';

import { EscalateIssueService } from './escalate-issue.service';

describe('EscalateIssueService', () => {
  let service: EscalateIssueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EscalateIssueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
