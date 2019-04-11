import * as moment from 'moment';
import { Injectable } from '@angular/core';
import { CalendarDay } from '../shared/models/calendar-day';


@Injectable()
export class CalendarService {

  constructor() {}

  private _getDays(): Array<CalendarDay> {
    let daysInMonth: number = moment().daysInMonth();
    let days: CalendarDay[] = [];
    for (let day = 1; day <= daysInMonth; day++) {
      let curDay: moment.Moment = moment({
        year: moment().year(),
        month: moment().month(),
        day: day
      });
      let curWeekday: number = curDay.weekday();
      let newDay: CalendarDay = {
        date: curDay,
        day: day,
        weekday: moment.weekdays()[curWeekday],
        isWeekend: (curWeekday === 0 || curWeekday === 6)
      };
      days.push(newDay);
    }
    return days;
  }

  getDaysByWeek(): Array<CalendarDay> {
    let weeks: any[] = [];
    let week: CalendarDay[] = [];
    let days: CalendarDay[] = this._getDays();
    for (let day of days) {
      week.push(day);
      if (week.length && day.date.weekday() === 6) {
        weeks.push(week);
        week = [];
      }
    }
    weeks.push(week);
    return weeks;
  }

  getWeekdays(isMin): Array<string> {
    let days: string[];
    if (!isMin) {
      days = moment.weekdays();
    } else {
      days = moment.weekdaysMin();
    }
    return days;
  }

  getMonths(): Array<string> {
    return moment.months();
  }

  isToday(day: CalendarDay): boolean {
    return (day.date.isSame(moment(), 'day'));
  }

}
