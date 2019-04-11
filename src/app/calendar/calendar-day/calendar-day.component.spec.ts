import * as moment from 'moment';

import { CalendarDayComponent } from './calendar-day.component';
import { CalendarService } from '../calendar.service';
import { CalendarDay } from '../../shared/models/calendar-day';

describe('Component: CalendarDay', () => {
  it('should create an instance', () => {
    let component = new CalendarDayComponent(new CalendarService());
    expect(component).toBeTruthy();
  });

  // it('should accept values in the constructor', () => {
  //   const now = moment();
  //   const todo = new CalendarDayComponent({
  //     day: new CalendarDay({date: now})
  //   });
  //   expect(todo.title).toEqual('hello');
  //   expect(todo.complete).toEqual(true);
  // });
});
