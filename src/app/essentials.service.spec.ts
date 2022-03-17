import { TestBed } from '@angular/core/testing';

import { EssentialsService } from './essentials.service';

describe('EssentialsService', () => {
  let service: EssentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EssentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
