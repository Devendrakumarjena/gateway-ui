import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
  private socket!: WebSocket;
  private subject = new Subject<any>();
  private connectionStatus = new BehaviorSubject<boolean>(false);  // To track connection status

  connect(url: string): Observable<any> {
    this.socket = new WebSocket(url);

    this.socket.onopen = () => {
      console.log('WebSocket connected');
      this.connectionStatus.next(true);  // Update the connection status
    };

    this.socket.onmessage = (event) => {
      this.subject.next(event.data);  // Emit the received message
    };

    this.socket.onerror = (event) => {
      console.error('WebSocket error observed:', event);
      this.connectionStatus.next(false);  // Mark connection as disconnected
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
      this.connectionStatus.next(false);  // Update connection status when closed
    };

    return this.subject.asObservable();
  }

  // Method to track the connection status
  getConnectionStatus(): Observable<boolean> {
    return this.connectionStatus.asObservable();
  }

  sendMessage(message: any): void {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(message));
    } else {
      console.error('WebSocket is not open. ReadyState:', this.socket.readyState);
    }
  }

  close(): void {
    if (this.socket) {
      this.socket.close();
      
    }
  }
}
