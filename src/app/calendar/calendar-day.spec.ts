import * as moment from 'moment';
import {CalendarDay} from './calendar-day';

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

  it('should allow date range selections', () => {
    // test eventStart, eventEnd
  });

  it('should display the selected date range', () => {
    // test display component
  });

  it('should allow to clear the selected date range', () => {
    // test clear display component
  });

});
