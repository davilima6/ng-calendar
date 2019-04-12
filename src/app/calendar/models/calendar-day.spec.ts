import * as moment from 'moment';
import { CalendarDay } from './calendar-day';

describe('CalendarDay', () => {
  it('should create an instance', () => {
    expect(new CalendarDay()).toBeTruthy();
  });

  it('should know about weekends', () => {
    let saturday = new CalendarDay({
      date: moment('10/01/2016'),
      day: '1',
      weekday: 'Saturday',
      isWeekend: true
    });
    let sunday = new CalendarDay({
      date: moment('10/02/2016'),
      day: '2',
      weekday: 'Sunday',
      isWeekend: true
    });

    expect(saturday.isWeekend).toEqual(true);
    expect(sunday.isWeekend).toEqual(true);
  });

  it('should be highlighted after selection if between start and end dates', () => {
  });

  it('should display initial state when selection is cleared', () => {
  });
});
