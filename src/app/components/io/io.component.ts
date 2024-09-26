import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { CommonTableComponent } from "../../shared/common-table/common-table.component";
import { WebSocketService } from '../../web-socket.service';
import { FormsModule } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-io',
  standalone: true,
  imports: [HeaderComponent, CommonTableComponent,FormsModule,NgIf,NgFor],
  templateUrl: './io.component.html',
  styleUrl: './io.component.scss',
})
export class IOComponent implements OnInit {
  title: string = '';
  messages: string[] = [];
  inputMessage = '';
  isConnected = false;

  constructor(private route: ActivatedRoute,private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.title = data.title;
    });

    this.webSocketService.connect('ws://localhost:8080/ws').subscribe(
      (message) => {
        this.messages.push(message);
      },
      (error) => console.error('Error receiving message:', error)
    );

    // Track connection status
    this.webSocketService.getConnectionStatus().subscribe(
      (status) => {
        this.isConnected = status;
      },
      (error) => console.error('Error tracking connection status:', error)
    );
  }
  sendMessage(): void {
    if (this.inputMessage.trim()) {
      this.webSocketService.sendMessage(this.inputMessage);
      this.inputMessage = '';  // Clear input field after sending
    }
  }

  reconnect(): void {
    // Reconnect logic in case of WebSocket closure or failure
    this.webSocketService.connect('ws://localhost:8080/ws').subscribe(
      (message) => {
        this.messages.push(message);
      },
      (error) => console.error('Error during reconnection:', error)
    );
  }

  ngOnDestroy(): void {
    // Close WebSocket when the component is destroyed
    this.webSocketService.close();
  }


}
