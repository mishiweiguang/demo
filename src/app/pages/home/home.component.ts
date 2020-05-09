import {Component, OnInit, ViewChild} from '@angular/core';
import {HomeService} from '../../services/home.service';
import {Banner, HotTag, Singer, SongSheet} from '../../services/data-type/common-types';
import {NzCarouselComponent} from 'ng-zorro-antd';
import {SingerService} from '../../services/singer.service';

/*
*轮播组件
* 与想要的页面有一定差别，进行一次二次封装
* */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})

export class HomeComponent implements OnInit {
  carouselActiveIndex = 0; // 定义一个面板回调的索引
  banners: Banner[]; // 定义一个数组获取服务传过来的数据
  hotTags: HotTag[]; // 保存热播标签数据
  songSheetList: SongSheet[]; // 保存推荐播单数据
  singers: Singer[]; // 保存入驻歌手数据

  @ViewChild(NzCarouselComponent, {static: true}) private  nzCarousel: NzCarouselComponent;

  /*
  *注入服务  调用方法  获取数据
  * */
  constructor(
    private homeService: HomeService,
    private singerService: SingerService) {
    this.getBanners();
    this.getHotTags();
    this.getPersonalSheetList();
    this.getEnterSingers();
  }

  /*
  *获取轮播数据
  * */
  private getBanners() {
    this.homeService.getBanners().subscribe(banners => {
      this.banners = banners;
    });
  }

  /*
  * 获取热播标签
  * */
  private getHotTags() {
    this.homeService.getHotTags().subscribe(tags => {
      // console.log(tags);
      this.hotTags = tags;
    });
  }

  /*
  * 获取推荐播单
  * */
  private getPersonalSheetList() {
    this.homeService.getPersonalSheetList().subscribe(sheets => {
      // console.log(sheets);
      this.songSheetList = sheets;
    });
  }

  /*
  * 获取入驻歌手
  * */
  private getEnterSingers() {
    this.singerService.getEnterSinger().subscribe(singer => {
      // console.log(singer);
      this.singers = singer;
    });
  }

  ngOnInit() {
  }

  /*
  * 接受面板回调事件所发射出的事件索引  发射函数：EventEmitter<{ from: number; to: number }>
  * */
  onBeforeChange({ to }) {
    console.log(to);
    this.carouselActiveIndex = to;  // 每次切换之后更新一下值
  }

  onChangeSlide(type: 'pre' | 'next') {
    this.nzCarousel[type]();
  }
}
