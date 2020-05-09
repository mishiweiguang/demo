import {NgModule, Optional, SkipSelf} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ServicesModule} from '../services/services.module';
import {PagesModule} from '../pages/pages.module';
import {ShareModule} from '../share/share.module';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {NZ_I18N, zh_CN} from 'ng-zorro-antd';

registerLocaleData(zh); // 配置语言

// 用来管理其他的一些模块，这样appmodule就只用进行一个模块就可以了
// 相当于一个根模块

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServicesModule,
    PagesModule,
    ShareModule,
    AppRoutingModule,
  ],
  exports: [
    ShareModule,
    AppRoutingModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: zh_CN }],
})

/*
* 查找的时候跳过自己，防止自己无限循环查找
* @SkipSelf() 查找的时候跳过自己，避免循环查找，去父级尽心查找
* @Optional()  当没有找到的时候就会赋值一个null，不会再第一次查找没有找到时抛一个错误出来
*/
export class CoreModule {
  constructor(@SkipSelf() @Optional() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule  只能被appModule引入');
    }
  }
}
