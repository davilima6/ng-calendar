import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CalendarService } from './calendar/services/calendar.service'
import { CalendarComponent } from './calendar/components/calendar/calendar.component';
import { CalendarDayComponent } from './calendar/components/calendar-day/calendar-day.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarDayComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CalendarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
