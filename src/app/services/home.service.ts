import {Inject, Injectable} from '@angular/core';
import {API_CONFIG, ServicesModule} from './services.module';
import {Observable} from 'rxjs';
import {Banner, HotTag, SongSheet} from './data-type/common-types';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';


@Injectable({
  providedIn: ServicesModule
})
export class HomeService {
  // @Inject  注入的装饰器
  constructor(private http: HttpClient, @Inject(API_CONFIG) private uri: string) { }
  /*
  *  通过外部接口调用轮播界面的数据
  * */
  getBanners(): Observable<Banner[]>{
    return this.http.get(this.uri + 'banner')
      .pipe(map((res: {banners: Banner[]}) => res.banners));
  }

  /*
  * 获取热播标签
  * */
  getHotTags(): Observable<HotTag[]>{
    return this.http.get(this.uri + 'playlist/hot')
      .pipe(map((res: { tags: HotTag[] }) => {
        return  res.tags.sort((x: HotTag, y: HotTag) => {
          return x.position - y.position;
        }).slice(0, 5);
      }));
  }

  /*
  * 获取推荐播单
  * */
  getPersonalSheetList(): Observable<SongSheet[]> {
    return this.http.get(this.uri + 'personalized')
      .pipe(map((res: {result: SongSheet[]}) => res.result.slice(0, 16)));
  }
}
