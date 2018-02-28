import { TestBed, inject } from '@angular/core/testing';

import { BlogService } from './blog.service';

describe('BlogserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BlogService]
    });
  });

  it('should be created', inject([BlogService], (service: BlogService) => {
    expect(service).toBeTruthy();
  }));
});
