import { NgModule } from '@angular/core';
import { TreeListComponent } from './tree-list.component';

import '@progress/kendo-ui';
import 'jquery';

@NgModule({
  imports: [
  ],
  declarations: [TreeListComponent],
  exports: [TreeListComponent]
})
export class AngularWrapperKendoUiModule { }
