import { Injectable } from '@angular/core';
import { io } from "socket.io-client";
import { Observable, Subject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket:any;
  private socketSubject$ = new Subject<any>();

  get socket$() {
    return this.socketSubject$.asObservable();
  }

  constructor(private auth: AuthService) { }
  connect() {
    this.socket = io(`${environment.apiUri}`, {
      transports: ['websocket']
    });
    this.socket.on('connect', (res: any) => {
      console.log('a user connected'); // show when the user connected
      console.log(res);
      if (this.socket) {
        this.socket.emit('connected');
      }
    });
    /*
    this.socket.on('physiologicalinfo', (res:any) => {
      // data format
      // 19: {
      //   BreathRate: 19
      //   HeartRate: 87
      //   Latitude: "24.8223286"
      //   Longitude: "121.0204294"
      //   MaxHeartRate: 226
      //   Status: "Normal"
      //   Temperature: 35.85
      // }
      const [Uid, data] = Object.entries<any>(res)[0];
      this.socketSubject$.next({
        Uid: +Uid,
        ...data,
        Temperature: +data.Temperature.toFixed(1),
      } as any);
    });
    */
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
    }
  }
}
