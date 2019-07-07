import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today: Date = new Date()
    let todayWithNoTime: any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value - todayWithNoTime)
    const secondsInAMinute = 3600;

    var dateDifferenceSeconds = dateDifference * 0.001; //converts to seconds

    var dateCounter = dateDifferenceSeconds / secondsInAMinute;

    if (dateCounter >= 1 && value > todayWithNoTime) {
      return 0;
    } else {
      return dateCounter;
    }
  }
}
