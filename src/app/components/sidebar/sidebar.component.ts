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
    { path: '/device', label: 'Device', icon: 'zmdi zmdi-developer-board zmdi-hc-lg' }, 
    { path: '/application', label: 'Application', icon: 'zmdi zmdi-airplay zmdi-hc-lg' },
    {
      label: 'Modules', 
      open: false, 
      submenu: [
        { path: '/rs232', label: 'RS232', icon: 'zmdi zmdi-serial' },  // Add icons for submenu
        { path: '/rs485', label: 'RS485', icon: 'zmdi zmdi-ethernet' },
        { path: '/can', label: 'CAN', icon: 'zmdi zmdi-car' },
        { path: '/io', label: 'IO', icon: 'zmdi zmdi-input-antenna' }
      ]
    },
    {
      label: 'Wireless', 
      open: false, 
      submenu: [
        { path: '/wifi', label: 'Wi-Fi', icon: 'zmdi zmdi-wifi' },
        { path: '/bluetooth', label: 'Bluetooth', icon: 'zmdi zmdi-bluetooth' }
      ]
    },
    {
      label: 'Cloud', 
      open: false, 
      submenu: [
        { path: '/Hardware', label: 'Hardware', icon: 'zmdi zmdi-cloud' }
      ]
    },
    {
      label: 'Setting', 
      open: false, 
      submenu: [
        { path: '/Interface', label: 'Interface', icon: 'zmdi zmdi-settings' },
        { path: '/wireless', label: 'Wireless', icon: 'zmdi zmdi-wifi-alt' }
      ]
    },
    { path: '#', label: 'Log', icon: 'zmdi zmdi-file-text' },
    { path: '#', label: 'Backup', icon: 'zmdi zmdi-storage' },
    { path: '#', label: 'Update', icon: 'zmdi zmdi-refresh-alt' },
    { path: '#', label: 'Reset', icon: 'zmdi zmdi-rotate-left' },
    { path: '#', label: 'About', icon: 'zmdi zmdi-info-outline' },
    { path: '#', label: 'Logout', icon: 'zmdi zmdi-power' }
  ];
  toggleSubmenu(item: any) {
    item.open = !item.open;
  }

}
