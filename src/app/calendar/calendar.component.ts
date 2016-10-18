import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { ISelection } from './iselection';
import { CalendarDay } from './calendar-day';
import { CalendarService } from './calendar.service';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  month: string = moment.months()[moment().month()];
  year: number = moment().year();
  months: string[] = [];
  weeks: any[];
  weekdays: string[] = [];
  selection: ISelection = { isSelecting: false, isSelected: false, lastHover: undefined };
  eventStart: CalendarDay;
  eventEnd: CalendarDay;

  constructor(private _calendarService: CalendarService) { }

  ngOnInit(): void {
    this.months = this._calendarService.getMonths();
    this.weeks = this._calendarService.getDaysByWeek();
    this.weekdays = this._calendarService.getWeekdays('min');
    this.selection = {
      isSelecting: !!this.selection.isSelecting,
      isSelected: !!this.selection.isSelected,
      lastHover: this.selection.lastHover || undefined
    };
  }

  makeSelection(day) {
    if (!day || this.selection.isSelected) {
      return;
    };
    this.selection.isSelecting = !this.selection.isSelecting;
    if (this.selection.isSelecting) {
      this.eventStart = day;
      this.eventEnd = undefined;
    } else {
      this.eventEnd = day;
      this.selection.lastHover = undefined;
      this.selection.isSelected = true;
      window.scrollTo(0, 0);
    }
  }

  clearChoice() {
    this.eventStart = undefined;
    this.eventEnd = undefined;
    this.selection = { isSelecting: false, isSelected: false, lastHover: undefined };
  }

  updateLastHover(day) {
    this.selection.lastHover = day;
  }

}
