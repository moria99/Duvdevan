import { TestBed } from '@angular/core/testing';

import { MyrdersService } from './myrders.service';

describe('MyrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyrdersService = TestBed.get(MyrdersService);
    expect(service).toBeTruthy();
  });
});
