import {CalendarDay} from './calendar-day';

export class CalendarMonth {
  title: string;
  days: CalendarDay[];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
