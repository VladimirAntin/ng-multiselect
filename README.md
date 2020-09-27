# Angular 9 Ng MultiSelect

## Installation

`ng-multiselect` is available via [npm](https://www.npmjs.com/package/@antin502/ng-multiselect)

Using npm:
```bash
$ npm install @antin502/ng-multiselect --save
```

- Import NgMultiSelect to your AppModule

``` js

import { AppComponent } from './app.component';
import {NgMultiselectModule} from '@antin502/ng-multiselect';

@NgModule({
    imports: [
        ....,
        NgMultiselectModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

- Use it in your template

``` html
      <ng-multiselect [dataList]="list"
                      [compareWith]="compareWith"
                      [(selectedValues)]="selected"
                      [options]="{hide: {selectedItems: false, search: true, selectionAll: true}}"
                      [formatter]="formatter"
      select-all-text="" unselect-all-text="">
      </ng-multiselect>

```
``` ts
      ....
      list = [];
      selected = [{id: 1}];
      title = 'ng-multiselect';
    
      formatter = (i) => i.text;
      compareWith = (a) => a.id;
    
      ngOnInit(): void {
        for (let i = 0; i < 100; i++) {
          this.list.push({id: i, text: `id=${i}`});
        }
      }
    
    
      log(e) {
        console.log(e);
      }
      ....

```

## Demo

- [Working Demo](https://vladimirantin.github.io/projects/ng-multiselect)


## Creator

#### [Vladimir Antin](mailto:antin502@gmail.com)
- [@GitHub](https://github.com/vladimirantin)
