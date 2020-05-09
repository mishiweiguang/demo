import { Pipe, PipeTransform } from '@angular/core';
/*
* 自定义管道  对播放量数据进行修饰
* */
@Pipe({
  name: 'playCount'
})
export class PlayCountPipe implements PipeTransform {

  transform(value: number): number | string {
    if (value > 10000) {
      return Math.floor(value / 10000) + '万';
    } else {
      return value;
    }
  }

}
