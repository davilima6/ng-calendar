/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { CalendarComponent } from './calendar.component';
import { CalendarService } from './calendar.service';

describe('Component: Calendar', () => {

  it('should create an instance', () => {
    let component = new CalendarComponent(new CalendarService());
    expect(component).toBeTruthy();
  });

});
