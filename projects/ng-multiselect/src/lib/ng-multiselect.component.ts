import {AfterViewInit, Component, ElementRef, Input, ViewChild, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'ng-multiselect',
  templateUrl: './ng-multiselect.component.html',
  styleUrls: ['./ng-multiselect.component.scss'],
})
export class NgMultiselectComponent implements AfterViewInit {

  open = false;
  @ViewChild('multiselect') multiselect: ElementRef<HTMLDivElement>;
  @Input() dataList: any[] = [];
  @Input() selectedValues = [];
  @Output() selectedValuesChange = new EventEmitter();
  @Input() formatter = (i: any) => i instanceof Object ? JSON.stringify(i) : i;
  @Input() compareWith = (a: any) => a;
  @Input() options: NgMultiselectOptions = {};
  @Input() placeholder = '';
  @Input('select-all-text') selectAllText = 'Select all';
  @Input('unselect-all-text') unselectAllText = 'Unselect all';
  selectAll = false;
  search = '';

  constructor() {
    const that = this;
    window.addEventListener('click', (e: any) => {
      if (!this.multiselect.nativeElement.contains(e.target)) {
        that.open = false;
      }
    });
  }

  ngAfterViewInit(): void {
    const selected = [...this.selectedValues.map(this.compareWith)];
    this.selectedValues = this.dataList.filter(i => selected.includes(this.compareWith(i)));
    this.registerChange();
    console.log(this.multiselect)
  }

  isChecked(i: any) {
    return this.selectedValues.map(this.compareWith).includes(this.compareWith(i));
  }

  change(i: any) {
    const index = this.selectedValues.indexOf(i);
    if (index !== -1) {
      this.selectedValues.splice(index, 1);
    } else {
      this.selectedValues.push(i);
    }
    this.registerChange();
  }

  registerChange() {
    this.selectAll = this.selectedValues.length === this.dataList.length;
    this.selectedValuesChange.emit(this.selectedValues);
  }

  selectAllOrUnselectAll() {
    if (this.selectAll) {
      this.selectedValues = [...this.dataList];
    } else {
      this.selectedValues = [];
    }
    this.registerChange();
  }

  filteredDataList() {
    return this.dataList.filter(s => this.formatter(s).indexOf(this.search) != -1);
  }
}

export interface NgMultiselectOptions {
  hide?: {
    selectedItems?: boolean
    search?: boolean
    selectionAll?: boolean
  };
}
