import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'selected-item',
  templateUrl: './selected-item.component.html',
  styleUrls: ['./selected-item.component.scss']
})
export class SelectedItemComponent implements OnInit {

  @Input() item;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

}
