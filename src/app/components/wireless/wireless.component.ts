import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from "../../shared/header/header.component";
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-wireless',
  standalone: true,
  imports: [HeaderComponent,FormsModule,NgFor],
  templateUrl: './wireless.component.html',
  styleUrl: './wireless.component.scss'
})
export class WIRELESSComponent implements OnInit {
  title: string = '';
// accessPointSettings: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.title = data.title;
    });
  }

   // WiFi network data model
   wifiNetworks = [
    {
      ssid: 'HelloWorld2G',
      password: '********',
      encryption: 'WPA2-PSK',
      ipMode: 'Static',
      ipAddress: '192.168.1.21',
      subnet: '255.255.255.0',
      gateway: '192.168.1.1'
    },
    {
      ssid: 'MyWifiNetwork',
      password: '********',
      encryption: 'WPA2-PSK',
      ipMode: 'Dynamic',
      ipAddress: '192.168.1.22',
      subnet: '255.255.255.0',
      gateway: '192.168.1.1'
    }
  ];

  // Access point settings model
  accessPointSettings = {
    ssid: 'NeoA2e491',
    password: '********',
    subnet: '255.255.255.0',
    dns1: '8.8.8.8',
    dns2: '8.8.8.8'
  };
}
