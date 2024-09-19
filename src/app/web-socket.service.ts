import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

    private socket: WebSocket;

  constructor() {
    this.socket = new WebSocket('ws://localhost:8080');
  }
sendMessage(message: string) {
    this.socket.send(message);
  }

  getMessage() {
    return new Observable(observer => {
      this.socket.onmessage = (event) => {
        observer.next(event.data);
      };
      this.socket.onclose = () => {
        observer.complete();
      };
      this.socket.onerror = () => {
        observer.error();
      };
    });
  } 
}
