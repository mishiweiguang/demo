import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from './services.module';
import {Observable} from 'rxjs';
import {Banner, Singer} from './data-type/common-types';
import {HttpClient, HttpParams} from '@angular/common/http';
import {map} from 'rxjs/operators';
import * as queryString from 'querystring';


type SingerParams = {
  offset: number;
  limit: number;
  cat?: string;
};

const defaultParams: SingerParams = {
  offset: 0,
  limit: 9,
  cat: '5001'
};

@Injectable({
  providedIn: ServicesModule
})
export class SingerService {
  // @Inject  注入的装饰器
  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }

  /*
  * 获取入驻歌手列表
  * */

  getEnterSinger(args: SingerParams = defaultParams): Observable<Singer[]> {
    // 定义一个传入参数的对象  用于传入需要传入的值，HttpParams是HTTP client自带的一个传入参数方式
    const params = new HttpParams({fromString: queryString.stringify(args)}); // queryString是一个第三方库但是angular已经以来了这个库，用于将对象转为字符串
    return this.http.get(this.uri + 'artist/list', {params})
      .pipe(map((res: {artists: Singer[]}) => res.artists));
  }
}
