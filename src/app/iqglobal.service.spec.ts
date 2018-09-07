import { TestBed, inject } from '@angular/core/testing';

import { IqglobalService } from './iqglobal.service';

describe('IqglobalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IqglobalService]
    });
  });

  it('should be created', inject([IqglobalService], (service: IqglobalService) => {
    expect(service).toBeTruthy();
  }));
});
