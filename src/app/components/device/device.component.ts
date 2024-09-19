import { Component } from '@angular/core';
import { CardComponent } from "../../shared/card/card.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-device',
  standalone: true,
  imports: [CommonModule,CardComponent],
  templateUrl: './device.component.html',
  styleUrl: './device.component.scss'
})
export class DeviceComponent {
  title = 'Device Information';
  cardsData = [
    { 
      title: 'System', 
      content: 'Chip ID: a2e491\nCPU Frequency: 160Mhz\nCPU Temperature: 34°C', 
      status: 'active', 
      details: 'Uptime: 0 days, 0 hours, 54 mins, 39 secs' 
    },
    { 
      title: 'Memory', 
      content: 'Flash: 31080/60120 Bytes\nHeap: 5440/102040 Bytes', 
      status: 'configured', 
      details: 'File System: 24435/98356 Bytes' 
    },
    { 
      title: 'Memory', 
      content: 'Flash: 31080/60120 Bytes\nHeap: 5440/102040 Bytes', 
      status: 'connected', 
      details: 'File System: 24435/98356 Bytes' 
    },
    { 
      title: 'Memory', 
      content: 'Flash: 31080/60120 Bytes\nHeap: 5440/102040 Bytes', 
      status: 'disconnected', 
      details: 'File System: 24435/98356 Bytes' 
    },
    { 
      title: 'Memory', 
      content: 'Flash: 31080/60120 Bytes\nHeap: 5440/102040 Bytes', 
      status: 'configured', 
      details: 'File System: 24435/98356 Bytes' 
    },
  ];
  
  
  
}
