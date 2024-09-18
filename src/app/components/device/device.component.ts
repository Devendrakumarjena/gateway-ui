import { Component } from '@angular/core';

@Component({
  selector: 'app-device',
  standalone: true,
  imports: [],
  templateUrl: './device.component.html',
  styleUrl: './device.component.scss'
})
export class DeviceComponent {
  title = 'Device Information';
  deviceSections = [
    { header: 'System', content: 'Chip ID: a2e491 ...' },
    { header: 'Memory', content: 'Flash: 31080/60120 Bytes ...' },
    // Add more sections dynamically
  ];
}
