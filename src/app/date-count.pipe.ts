import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
// tslint:disable-next-line: prefer-const
    let today: Date = new Date();
// tslint:disable-next-line: prefer-const
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate());

// tslint:disable-next-line: no-var-keyword
// tslint:disable-next-line: prefer-const
    var dateDifference = Math.abs(value - todayWithNoTime);
    const secondsInAMinute = 3600;

// tslint:disable-next-line: no-var-keyword
// tslint:disable-next-line: prefer-const
    var dateDifferenceSeconds = dateDifference * 0.001;

// tslint:disable-next-line: prefer-const
    var dateCounter = dateDifferenceSeconds / secondsInAMinute;

    if (dateCounter >= 1 && value > todayWithNoTime) {
      return 0;
    } else {
      return dateCounter;
    }
  }
}
