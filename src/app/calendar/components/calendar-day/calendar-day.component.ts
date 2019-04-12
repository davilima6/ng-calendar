import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { ISelection } from '../../interfaces/iselection';
import { CalendarDay } from '../../models/calendar-day';
import { CalendarService } from '../../services/calendar.service';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit, OnChanges {
  @Input() day: CalendarDay;
  @Input() eventStart: CalendarDay;
  @Input() eventEnd: CalendarDay;
  @Input() selection: ISelection;
  @Output() makeSelection: EventEmitter<CalendarDay> = new EventEmitter();
  @Output() updateLastHover: EventEmitter<CalendarDay> = new EventEmitter();
  klass = 'calendar--day';
  lastHover: CalendarDay;
  private _isToday: boolean;

  constructor(private _calendarService: CalendarService) {}

  ngOnInit(): void {
    this._isToday = this._calendarService.isToday(this.day);
    this.klass += this._isToday ? ' is-today' : '';
    this.klass += this.day.isWeekend ? ' is-weekend' : '';
  }

  ngOnChanges(changes): void {
    this._paintDayInRange(changes);  // Paint day if it's between start and end dates
    this._paintHover(changes); // Mark days from start to current hover
    this._paintEventStartEnd(changes);  // Mark event start and end
    this._paintDisallowUI();  // Disallow UI when selection is finished
  };

  dayClick() {
    this.makeSelection.emit(this.day);
  }

  dayMouseOver() {
    if (!this.selection.isSelecting || this.selection.isSelected) {
      return;
    };

    this.updateLastHover.emit(this.day);
  }

  dayMouseOut() {
    if (!this.selection.isSelecting || this.selection.isSelected) {
      return;
    };
  }

  private _paintDayInRange(changes): void {
    // Paint day if it's between start and end dates
    let eventEnd: CalendarDay = changes.eventEnd && changes.eventEnd.currentValue;

    if (this.selection.isSelected && eventEnd) {
      this.klass += this._isBetween(this.eventStart.date, this.eventEnd.date) ? ' is-between' : '';
    } else {
      // Reset UI when selection is cleared
      this.klass = this.klass.replace(' is-between', '');
    }
  }

  private _paintHover(changes): void {
    // Paint day if it's between start date and last hovered day
    let lastHover: CalendarDay = changes.lastHover;
    let eventStart: CalendarDay = changes.eventStart && changes.eventStart.currentValue;
    let eventEnd: CalendarDay = changes.eventEnd && changes.eventEnd.currentValue;

    if (eventStart && !eventEnd && lastHover) {
      this.klass += this._isBetween(eventStart.date, lastHover.date) ? ' is-hover' : '';
    } else if (eventStart && eventEnd) {
      // Reset UI when selection is finished
      this.klass = this.klass.replace(' is-hover', '');
    }
  }

  private _paintEventStartEnd(changes): void {
    // Mark event start
    let isSelected: boolean = this.selection.isSelected;
    let eventStart: CalendarDay = changes.eventStart && changes.eventStart.currentValue;

    if (eventStart) {
      this.klass += this.day.date.isSame(eventStart.date, 'day') ? ' event--start' : '';
    } else if (!isSelected) {
      // Reset UI when selection is cleared
      this.klass = this.klass.replace(' event--start', '');
    }

    // Mark event end
    let eventEnd: CalendarDay = changes.eventEnd && changes.eventEnd.currentValue;

    if (eventEnd) {
      this.klass += this.day.date.isSame(eventEnd.date, 'day') ? ' event--end  ' : '';
    } else if (!isSelected) {
      // Reset UI when selection is cleared
      this.klass = this.klass.replace(' event--end', '');
    }
  }

  private _paintDisallowUI(): void {
    // Disallow UI when selection is finished
    let isSelecting: boolean = this.selection.isSelecting;
    let isSelected: boolean = this.selection.isSelected;

    if (isSelected) {
      this.klass += ' not-allowed';
    } else if (!isSelecting) {
      // Reset UI when selection is cleared
      this.klass = this.klass.replace(' not-allowed', '');
    }
  }

  private _isBetween(date1, date2): boolean {
    return (this.day.date.isBetween(date1, date2) || this.day.date.isBetween(date2, date1));
  }
}
