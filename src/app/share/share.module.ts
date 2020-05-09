import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {WyUiModule} from './wy-ui/wy-ui.module';


// 共享模块，存放一些公共的组件  指令

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    WyUiModule
  ],
  exports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    WyUiModule,
  ]
})
export class ShareModule { }
