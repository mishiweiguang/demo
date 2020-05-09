import {InjectionToken, NgModule} from '@angular/core';


export const API_CONFIG = new InjectionToken('ApiConfigToken');

// 存放一些服务的，像一些http等一些服务

@NgModule({
  declarations: [],
  imports: [
  ],
  providers: [
    {provide: API_CONFIG, useValue: 'http://localhost:3000/'}
  ]
})
export class ServicesModule { }
