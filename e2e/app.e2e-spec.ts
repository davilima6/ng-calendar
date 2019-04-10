import { NgCalendarPage } from './app.po';

describe('NgCalendar App', function() {
  let page: NgCalendarPage;

  beforeEach(() => {
    page = new NgCalendarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
