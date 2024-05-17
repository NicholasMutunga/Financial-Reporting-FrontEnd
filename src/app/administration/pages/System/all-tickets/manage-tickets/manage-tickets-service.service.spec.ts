import { TestBed } from '@angular/core/testing';

import { ManageTicketsServiceService } from './manage-tickets-service.service';

describe('ManageTicketsServiceService', () => {
  let service: ManageTicketsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManageTicketsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
