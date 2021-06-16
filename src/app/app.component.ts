import { Component, HostListener, OnInit } from '@angular/core';
import { environment } from './../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @HostListener('window:beforeunload', ['$event'])
  onWindowClose(event: any): void {
    // 開發中先關閉
    if (environment.production) {
      localStorage.clear();
    }
  }

  constructor() {
  }

  ngOnInit() {
  }
}
