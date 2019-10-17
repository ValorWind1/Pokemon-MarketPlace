import { TestBed } from '@angular/core/testing';

import { ItemServiceService } from './item-service.service';

describe('ItemServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemServiceService = TestBed.get(ItemServiceService);
    expect(service).toBeTruthy();
  });
});
