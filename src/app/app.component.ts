import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  // TODO::開發中先關閉
  // @HostListener('window:beforeunload', ['$event'])
  // onWindowClose(event: any): void {
  //   localStorage.clear();
  // }

  constructor() {
  }

  ngOnInit() {
  }
}
