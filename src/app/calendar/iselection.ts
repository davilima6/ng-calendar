import { CalendarDay } from './calendar-day';

export interface ISelection {
  isSelecting: boolean;
  isSelected: boolean;
  lastHover: CalendarDay;
}
