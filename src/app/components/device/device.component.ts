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
   // Your JSON data
   jsonData = {
    system: {
      chipid: 'a2e491',
      cpufreq: '240Mhz',
      flashspeed: '40Mhz',
      cputemp: '34degC',
      serial: '9854cd8e0d84',
      efuse: '98:54:cd:8e:0d:84',
      uptime: '0d0h54m39s'
    },
    memory: {
      flash: '31080/50120',
      heap: '54067/102400',
      fs: '244323/963355'
    },
    provision: {
      status: 'configured',
      deviceid: 'neo-a2e491',
      org: 'abc-001',
      server: 'Neo-Server',
      preuri: 'mqtt://34.47.158.159:1883',
      preuname: 'neo-a2e491',
      prepassword: 'abc-device-01',
    },
    interfaces: {
      accesspoint: {
        status: 'active',
        ssid: 'neo-a2e491',
        password: 'pass@123',
        standard: '802.11bgn',
        band: '2.4Ghz-2.5Ghz',
        encrypt: 'WPA2-PSK',
      },
      bluetooth: {
        status: 'inactive',
        name: 'neo-a2e491',
        standard: 'Bluetooth v4.2 +EDR',
        protocol: 'Bluetooth/BLE',
        paired: 'false',
        mac: '84.0d.8e.cd.54.9a',
      }
    }
  };

  // Transforming the JSON into an array to loop over in the template
  jsonSections = [
    { title: 'System', data: this.jsonData.system },
    { title: 'Memory', data: this.jsonData.memory,  memoryUsage: {
      flash: (parseInt(this.jsonData.memory.flash.split('/')[0]) / parseInt(this.jsonData.memory.flash.split('/')[1])) * 100,
      heap: (parseInt(this.jsonData.memory.heap.split('/')[0]) / parseInt(this.jsonData.memory.heap.split('/')[1])) * 100,
      fs: (parseInt(this.jsonData.memory.fs.split('/')[0]) / parseInt(this.jsonData.memory.fs.split('/')[1])) * 100
    }},
    { title: 'Provisioning', status: this.jsonData.provision.status, data: this.jsonData.provision },
    { title: 'Access Point', status: this.jsonData.interfaces.accesspoint.status, data: this.jsonData.interfaces.accesspoint },
    { title: 'Bluetooth', status: this.jsonData.interfaces.bluetooth.status, data: this.jsonData.interfaces.bluetooth }
  ];
  // Create a structured array to loop through the app-cards
  cardData = [
    {
      title: 'System',
      data: this.jsonData.system,
      status: null // No status for system
    },
    {
      title: 'Memory',
      data: this.jsonData.memory,
      status: null // No status for memory
    },
    {
      title: 'Provisioning',
      data: this.jsonData.provision,
      status: this.jsonData.provision.status // Status for provisioning
    },
    {
      title: 'Access Point',
      data: this.jsonData.interfaces.accesspoint,
      status: this.jsonData.interfaces.accesspoint.status // Status for Access Point
    },
    {
      title: 'Bluetooth',
      data: this.jsonData.interfaces.bluetooth,
      status: this.jsonData.interfaces.bluetooth.status // Status for Bluetooth
    }
  ];
  
}
