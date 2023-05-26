import { TestBed } from '@angular/core/testing';

import { DemoStudentsService } from './demo-students.service';

describe('DemoStudentsService', () => {
  let service: DemoStudentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoStudentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
