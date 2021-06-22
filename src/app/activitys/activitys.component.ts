import { Component, OnInit, OnDestroy } from '@angular/core';

import { WebsocketService } from '../_services/websocket.service';

@Component({
  selector: 'app-activitys',
  templateUrl: './activitys.component.html',
  styleUrls: ['./activitys.component.scss']
})
export class ActivitysComponent implements OnInit, OnDestroy {

  constructor(
    private websocketService: WebsocketService,
  ) { }

  ngOnInit(): void {

    this.websocketService.connect();

  }

  ngOnDestroy() {
    this.websocketService.disconnect();
  }
}
