import {Injectable} from "@angular/core";
import {forkJoin, Observable} from "rxjs";
import {Resolve} from "@angular/router";
import {HomeService} from "../../services/home.service";
import {SingerService} from "../../services/singer.service";
import {Banner, HotTag, Singer, SongSheet} from "../../services/data-type/common-types";
import {take} from "rxjs/operators";

/*
* 路由守卫  用于保护数据的传输，是的用户体验更好
*
*如果你在使用真实 api，很有可能数据返回有延迟，导致无法即时显示。
*在这种情况下，直到数据到达前，显示一个空的组件不是最好的用户体验。
*最好预先从服务器上获取完数据，这样在路由激活的那一刻数据就准备好了。 还要在路由到此组件之前处理好错误。
*当某个 id 无法对应到一个危机详情时，就没办法处理它。 这时最好把用户带回到“危机列表”中，那里显示了所有有效的“危机”。
*总之，你希望的是只有当所有必要数据都已经拿到之后，才渲染这个路由组件。
*你需要 Resolve 守卫。
* */


type HomeDataType = [Banner[], HotTag[], SongSheet[], Singer[]];  //定义返回值的类型：包含四种数组类型的一个数组

@Injectable()
export class HomeResolveService implements Resolve<HomeDataType> {
  constructor(
    private homeService: HomeService,
    private singerService: SingerService,
  ) {}

  // 接口的方法
  resolve(): Observable<HomeDataType> {
    return  forkJoin([
      this.homeService.getBanners(),
      this.homeService.getHotTags(),
      this.homeService.getPersonalSheetList(),
      this.singerService.getEnterSinger()
    ]).pipe(take(1))  // forkJoin作用：里面接收一个数组，数组里面的每一个对象都返回一个Observable对象 ,
                            // 在每一项服务方法都完成之后会将里面最新值给发射出去。
                            // take作用：forkJoin所发射出去的流只取第一个，后面的都不要了，只取第一个也可以使用first（）进行
  }
}
