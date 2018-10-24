import {
  Component,
  ViewEncapsulation,
  NgZone,
  ElementRef,
  ViewChild,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ChangeDetectionStrategy,
  Input
} from '@angular/core';

declare var kendo: any;

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-treelist',
  templateUrl: './tree-list.component.html',
  styleUrls: ['./tree-list.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreeListComponent implements OnInit, AfterViewInit, OnDestroy {

  @Input()
  public options: kendo.ui.TreeListOptions;

  @ViewChild('treelist')
  treelistEl: ElementRef;

  private _treelist: any;

  constructor(private zone: NgZone, private elementRef: ElementRef) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    const treeList = kendo.jQuery(this.treelistEl.nativeElement);

    this.zone.runOutsideAngular(() => {
      this._treelist = treeList
        .kendoTreeList(this.options)
        .data('kendoTreeList');
    });
  }

  ngOnDestroy(): void {
    kendo.destroy(this.elementRef.nativeElement);
  }

  public addRow(parentRow: string | Element | JQuery = ''): void {
    return this._treelist && this._treelist.addRow(parentRow);
  }

  public editRow(row: string | JQuery ): void {
    if (!row) {
      return;
    }

    const internalRow = (row instanceof jQuery ? row : kendo.jQuery(row));


    return this._treelist && this._treelist.editRow(internalRow);
  }

  public removeRow(row: string | Element | JQuery): void {
    if (!row) {
      return;
    }

    return this._treelist && this._treelist.removeRow(row);
  }

  public expand(row: string | Element | JQuery): void {
    if (!row) {
      return;
    }

    return this._treelist && this._treelist.expand(row);
  }

  public clearSelection(): void {
    return this._treelist && this._treelist.clearSelection();
  }

}
