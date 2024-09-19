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
    { title: 'SYSTEM', data: ['Chip ID: a2e491', 'CPU Frequency: 160Mhz', 'CPU Temperature: 34°C'] },
    { title: 'MEMORY', data: ['Flash: 31080 / 60120 Bytes', 'Heap: 5400 / 102040 Bytes'] },
    { title: 'WIRED', data: ['Hostname: Neo-a2e491', 'IP Address: 192.168.1.21 [DHCP]'] },
    { title: 'WI-FI (Access Point)', data: ['SSID: Neo-a2e491', 'Clients: 0', 'Standard: 802.11bgn'] },
    { title: 'MODEM', data: ['Carrier: Jio4G', 'State: Searching', 'SIM Card: Not Inserted'] },
    { title: 'BLUETOOTH', data: ['Mode: BLE', 'UUID: c4185585-45dc'] }
  ];
  
}
