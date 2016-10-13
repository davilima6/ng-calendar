import { CalendarRidelinkPage } from './app.po';

describe('calendar-ridelink App', function() {
  let page: CalendarRidelinkPage;

  beforeEach(() => {
    page = new CalendarRidelinkPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
