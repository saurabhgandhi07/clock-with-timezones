import { Component, OnInit } from '@angular/core';
import moment_tz_ from 'moment-timezone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'clock-with-timezones';
  localTime: any;
  time: any;
  selectedTimeZone: any = "Asia/Calcutta";
  showTime: any;
  momentTz = moment_tz_;
  timeZones: any[] = [
    {
      "lookupCode": "IST",
      "lookupName": "Indian Standard Time",
      "lookupDescription": "Asia/Calcutta"
    },
    {
      "lookupCode": "EST",
      "lookupName": "Eastern Standard Time",
      "lookupDescription": "America/New_York"
    },
    {
      "lookupCode": "CDT",
      "lookupName": "Central Standard Time",
      "lookupDescription": "America/Chicago"
    },
    {
      "lookupCode": "MDT",
      "lookupName": "Mountain Standard Time",
      "lookupDescription": "America/Denver"
    },
    {
      "lookupCode": "PDT",
      "lookupName": "Pacific Standard Time",
      "lookupDescription": "America/Los_Angeles"
    },
    {
      "lookupCode": "AKDT",
      "lookupName": "Alaskan Standard Time",
      "lookupDescription": "America/Anchorage"
    },
    {
      "lookupCode": "EST",
      "lookupName": "Eastern Standard Time",
      "lookupDescription": "America/New_York"
    },
    {
      "lookupCode": "HADT",
      "lookupName": "Hawaiian Standard Time",
      "lookupDescription": "Pacific/Honolulu",
    }
  ];

  ngOnInit(): void {
    this.getCurrentDate();
  }

  getCurrentDate() {
    setInterval(() => {
      let timeZoneCode = this.selectedTimeZone;
      this.localTime = this.getTimeZone(timeZoneCode);
    }, 1000);
  }

  getTimeZone(tz: any) {
    this.time = this.momentTz.tz(tz).format('hh:mm:ss A');
    return this.time;
  }

}
