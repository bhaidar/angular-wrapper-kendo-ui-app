import { TestBed, inject } from '@angular/core/testing';

import { AngularWrapperKendoUiService } from './angular-wrapper-kendo-ui.service';

describe('AngularWrapperKendoUiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AngularWrapperKendoUiService]
    });
  });

  it('should be created', inject([AngularWrapperKendoUiService], (service: AngularWrapperKendoUiService) => {
    expect(service).toBeTruthy();
  }));
});
