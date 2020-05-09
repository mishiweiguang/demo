import { NgModule } from '@angular/core';
import { SingleSheetComponent } from './single-sheet/single-sheet.component';
import {PlayCountPipe} from '../play-count.pipe';

/*
* 管理通用ui组件的模块
* */

@NgModule({
  declarations: [
    SingleSheetComponent,
    PlayCountPipe],
  imports: [
  ],
  exports: [
    SingleSheetComponent,
    PlayCountPipe]
})
export class WyUiModule { }
