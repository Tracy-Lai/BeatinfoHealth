import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    if (value == 0) {
      return "女";
    } else if (value == 1) {
      return "男";
    }

    return "未知";
  }

}
