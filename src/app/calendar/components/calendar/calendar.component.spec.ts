import { CalendarComponent } from '../../components/calendar/calendar.component';
import { CalendarService } from '../../services/calendar.service';

describe('Component: Calendar', () => {
  it('should create an instance', () => {
    let component = new CalendarComponent(new CalendarService());
    expect(component).toBeTruthy();
  });

  it('should allow date range selections', () => {
    // test eventStart, eventEnd
  });

  it('should display the selected date range', () => {
    // test display component
  });

  it('should allow to clear the selected date range', () => {
    // test clearChoice
  });
});
