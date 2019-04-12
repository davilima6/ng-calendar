import * as moment from 'moment';

export class CalendarDay {
  date: moment.Moment;
  day: number;
  weekday: string;
  isWeekend: boolean;

  constructor(obj?: any) {
    let weekday = obj.date.weekday();

    this.date = obj.date;
    this.day = obj.day || this.date.date();
    this.weekday = obj.weekday || moment.weekdays()[weekday];
    this.isWeekend = obj.isWeekend || (weekday === 0 || weekday === 6);
  }
}
