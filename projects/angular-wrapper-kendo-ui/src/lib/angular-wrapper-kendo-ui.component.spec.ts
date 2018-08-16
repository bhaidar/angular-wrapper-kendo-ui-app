import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularWrapperKendoUiComponent } from './angular-wrapper-kendo-ui.component';

describe('AngularWrapperKendoUiComponent', () => {
  let component: AngularWrapperKendoUiComponent;
  let fixture: ComponentFixture<AngularWrapperKendoUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularWrapperKendoUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularWrapperKendoUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
