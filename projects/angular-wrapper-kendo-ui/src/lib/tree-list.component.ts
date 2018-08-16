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

declare var jQuery: any;

@Component({
  selector: 'aku-tree-list',
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
    const treeList = jQuery(this.treelistEl.nativeElement);

    this.zone.runOutsideAngular(() => {
      this._treelist = treeList
        .kendoTreeList(this.options)
        .data('kendoTreeList');
    });
  }

  ngOnDestroy(): void {
    kendo.destroy(this.elementRef.nativeElement);
  }

  public clearSelection(): void {
    return this._treelist && this._treelist.clearSelection();
  }

}
