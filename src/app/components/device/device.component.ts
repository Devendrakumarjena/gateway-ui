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
  deviceCards = [
    {
      title: 'SYSTEM',
      content: [
        'Chip ID: a2e491',
        'CPU Frequency: 160Mhz',
        'CPU Temperature: 34°C',
        'Serial Number: 985d4cd8e0d84',
        'Efuse: 985d4cd8e0d84',
        'Uptime: 0 days, 0 hours, 54 mins, 39 secs'
      ]
    },
    {
      title: 'MEMORY',
      content: [
        'Flash: 31MB / 60MB',
        'Heap: 54MB / 102MB',
        'File System: 24MB / 98MB'
      ]
    },
    {
      title: 'PROVISIONING',
      content: [
        'Device ID: Neo-a2e491',
        'Organization Code: ABC-001',
        'Server: Neo Server',
        'Host: 34.47.158.159:8883',
        'Snapshot: default.com',
        'Provisioned At: 2024-09-14 12:32:11'
      ]
    },
    {
      title: 'WIRED',
      content: [
        'Hostname: Neo-a2e491',
        'IP Address: 192.168.1.21 [DHCP]',
        'Subnet: 255.255.255.0',
        'Gateway: 192.168.1.1',
        'DNS: 8.8.8.8',
        'Internet Access: Not Connected',
        'MAC Address: 84:0d:8e:cd:54:99'
      ]
    }
    // Add more cards as necessary
  ];
  
}
