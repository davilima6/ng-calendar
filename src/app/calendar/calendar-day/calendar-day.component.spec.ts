/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CalendarDayComponent } from './calendar-day.component';
import { CalendarService } from '../calendar.service';

describe('Component: CalendarDay', () => {
  it('should create an instance', () => {
    let component = new CalendarDayComponent(new CalendarService());
    expect(component).toBeTruthy();
  });
});
