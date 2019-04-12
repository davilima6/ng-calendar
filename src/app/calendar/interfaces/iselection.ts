import { CalendarDay } from '../models/calendar-day';

export interface ISelection {
  isSelecting: boolean;
  isSelected: boolean;
  lastHover: CalendarDay;
}
