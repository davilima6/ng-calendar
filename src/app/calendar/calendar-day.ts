import * as moment from 'moment';

export class CalendarDay {
  date: moment.Moment;
  day: number;
  weekday: string;
  isWeekend: boolean;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
