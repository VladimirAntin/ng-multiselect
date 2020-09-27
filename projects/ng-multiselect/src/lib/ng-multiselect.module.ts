import {NgModule} from '@angular/core';
import {NgMultiselectComponent} from './ng-multiselect.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { SelectedItemComponent } from './selected-item/selected-item.component';
import { TruncatePipe } from './truncate.pipe';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [NgMultiselectComponent, SelectedItemComponent, TruncatePipe],
  exports: [NgMultiselectComponent]
})
export class NgMultiselectModule { }
