import { TestBed } from '@angular/core/testing';

import { AssignServiceService } from './data-input-management.service';

describe('AssignServiceService', () => {
  let service: AssignServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssignServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
