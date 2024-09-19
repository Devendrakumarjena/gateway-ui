import { NgFor, NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet,RouterLink ,RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,NgFor, NgClass, NgIf],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {

  menuItems = [
    { path: '/device', label: 'Device' },
    {
      label: 'Modules', 
      open: false, 
      submenu: [
        { path: '/rs232', label: 'RS232' },
        { path: '/rs485', label: 'RS485' }
      ]
    },
    { path: '/can', label: 'CAN' },
    {
      label: 'Wireless',
      open: false, 
      submenu: [
        { path: '/wifi', label: 'Wi-Fi' },
        { path: '/bluetooth', label: 'Bluetooth' }
      ]
    },
    { path: '/io', label: 'IO' }
  ];

  // Toggle submenu visibility
  toggleSubmenu(item: any) {
    item.open = !item.open;
  }

}
