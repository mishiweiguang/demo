import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';

/*
*对轮播组件进行二次封装的组件
* 包含一个组件注入<ng-content></ng-content>对轮播组件进行展示
* */
@Component({
  selector: 'app-wy-carousel',
  templateUrl: './wy-carousel.component.html',
  styleUrls: ['./wy-carousel.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WyCarouselComponent implements OnInit {
  @Input() activeIndex = 0; // 将activeIndex作为一个输入属性将carouselActiveIndex交给它，之后与点的索引匹配进行高亮

  @ViewChild('dot', {static: true}) dotRef: TemplateRef<any>; // 查看视图的dom是否发生变化，有就会更新新的节点

  @Output() changeSlide = new EventEmitter<'pre' | 'next'>(); // 将子组件的数据流到父组件中


  constructor() { }

  ngOnInit() {
  }

  /*
  * 点击事件
  * 该事件只有发射到轮播图中才能发挥控制轮播图作用，所以使用@Output()修饰这个对象
  * */
  onChangeSlide(type: 'pre' | 'next') {
    this.changeSlide.emit(type); // 将type发射到父组件，父组件监听到之后进行相关操作
  }
}
