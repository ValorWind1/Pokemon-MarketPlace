import { TestBed } from '@angular/core/testing';

import { ApiConsumerService } from './api-consumer.service';

describe('ApiConsumerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiConsumerService = TestBed.get(ApiConsumerService);
    expect(service).toBeTruthy();
  });
});
