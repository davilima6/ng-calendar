import { CalendarDay } from './calendar-day';

export class CalendarMonth {
  title: string;
  days: CalendarDay[];

  constructor(obj?: any) {
    this.title = obj.title;
    this.days = obj.days;
  }
}
