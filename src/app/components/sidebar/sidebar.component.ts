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
      icon: 'zmdi zmdi-view-module zmdi-hc-lg',
      open: false, 
      submenu: [
        { path: '/rs232', label: 'RS232', icon: 'zmdi zmdi-reader' },
        { path: '/rs485', label: 'RS485', icon: 'zmdi zmdi-device-hub' },
        { path: '/can', label: 'CAN', icon: 'zmdi zmdi-car' },
        { path: '/io', label: 'IO', icon: 'zmdi zmdi-input-antenna' },
        { path: '/cloud', label: 'Cloud', icon: 'zmdi zmdi-input-antenna' }
      ]
    },
    {
      label: 'Setting', 
      icon: 'zmdi zmdi-settings zmdi-hc-lg',
      open: false, 
      submenu: [
        { path: '/Interface', label: 'Interface', icon: 'zmdi zmdi-memory zmdi-hc-lg' },
        { path: '/wireless', label: 'Wireless', icon: 'zmdi zmdi-wifi-alt zmdi-hc-lg' }
      ]
    },
    { path: '#', label: 'Log', icon: 'zmdi zmdi-view-headline zmdi-hc-lg' },
    { path: '#', label: 'Backup', icon: 'zmdi zmdi-folder-outline zmdi-hc-lg' },
    { path: '#', label: 'Update', icon: 'zmdi zmdi-present-to-all zmdi-hc-lg' },
    { path: '#', label: 'Reset', icon: 'zmdi zmdi-refresh-sync zmdi-hc-lg' },
    { path: '#', label: 'About', icon: 'zmdi zmdi-assignment-o zmdi-hc-lg' },
    { path: '#', label: 'Logout', icon: 'zmdi zmdi-mail-reply-all zmdi-hc-lg' }
  ];
  toggleSubmenu(item: any) {
    item.open = !item.open;
  }

}
