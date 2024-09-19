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
        { path: '/rs485', label: 'RS485' },
        { path: '/can', label: 'CAN' }, //change
        { path: '/io', label: 'IO' } //change
      ]
    },
    // { path: '/can', label: 'CAN' },
    {
      label: 'Wireless', 
      open: false, 
      submenu: [
        { path: '/wifi', label: 'Wi-Fi' },
        { path: '/bluetooth', label: 'Bluetooth' }
      ]
    },
    {
      label: 'Cloud', //change
      open: false, 
      submenu: [
        { path: '/Hardware', label: 'Hardware' }
      ]
    },
    {
      label: 'Setting', //change
      open: false, 
      submenu: [
        { path: '/Interface', label: 'Interface' },
        { path: '/wireless', label: 'wireless' }
      ]
    },
    { path: '#', label: 'Logs' }, //change
    { path: '#', label: 'Backup' }, //change
    { path: '#', label: 'Update' }, //change
    { path: '#', label: 'Reset' }, //change
    { path: '#', label: 'About' }, //change
    { path: '#', label: 'Logout' }, //change
  ];

  // Toggle submenu visibility
  toggleSubmenu(item: any) {
    item.open = !item.open;
  }

}
