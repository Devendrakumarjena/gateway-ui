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

  cardsDatas = [
    {
      "system": {
          "chipid": "a2e491",
          "cpufreq": "240Mhz",
          "flashspeed": "40Mhz",
          "cputemp": "34degC",
          "serial": "9854cd8e0d84",
          "efuse": "98:54:cd:8e:0d:84",
          "uptime": "0d0h54m39s"
      },
      "memory": {
          "flash": "31080/50120",
          "heap": "54067/102400",
          "fs": "244323/963355"
      },
      "provision": {
          "status": "configured",
          "deviceid": "neo-a2e491",
          "org": "abc-001",
          "server": "Neo-Server",
          "preuri": "mqtt://34.47.158.159:1883",
          "preuname": "neo-a2e491",
          "prepassword": "abc-device-01",
          "uri": "mqtts://34.47.158.159:8883",
          "uname": "neo-a2e491",
          "password": "abc-device-01",
          "certs": "",
          "topics": {
              "mgmt": "/{{MAC}}/MGMT",
              "ping": "/{{MAC}}/PING",
              "logs": "/{{MAC}}/LOG",
              "prov": "/{{MAC}}/PROV"
          },
          "ts": "2024-09-14 12:32:14",
          "maxtries": "5"
      },
      "interfaces": {
          "accesspoint": {
              "status": "active",
              "ssid": "neo-a2e491",
              "password": "pass@123",
              "standard": "802.11bgn",
              "band": "2.4Ghz-2.5Ghz",
              "encrypt": "WPA2-PSK",
              "mac": "84.0d.8e.cd.54.98",
              "clients": [
                  "00:11:22:33:44:55|192.168.4.2"
              ]
          },
          "wireless": {
              "status": "connected",
              "ssid": "MyDevice2G",
              "password": "pass@123",
              "mode": "dhcp",
              "ip": "192.168.1.1",
              "subnet": "255.255.255.0",
              "gateway": "192.168.1.1",
              "dns": "192.168.1.1",
              "internet": "true",
              "rssi": "",
              "mac": "84.0d.8e.cd.54.98",
              "wan": "true",
              "accesspoints": [
                  "MyDevice5Gpassword|pass@123"
              ]
          },
          "bluetooth": {
              "status": "inactive",
              "name": "neo-a2e491",
              "pin": "8888",
              "standard": "Bluetooth v4.2 +EDR",
              "protocol": "Bluetooth/BLE",
              "paired": "false",
              "mac": "84.0d.8e.cd.54.9a",
              "uuid": "b3e8f1cc-dbbc-47bb-98fb-ea4203685420"
          },
          "wired": {
              "status": "configured",
              "hostname": "neo-a2e491",
              "mode": "dhcp",
              "ip": "192.168.1.1",
              "subnet": "255.255.255.0",
              "gateway": "192.168.1.1",
              "dns": "8.8.8.8",
              "internet": "false",
              "mac": "84.0d.8e.cd.54.99",
              "wan": "false"
          },
          "modem": {
              "status": "disconnected",
              "provider": "JIO4G",
              "network": "Searching; N/A; No Service",
              "imei": "354721880135408",
              "simcard": {
                  "state": "inserted",
                  "imsi": "084950484162365761",
                  "iccid": "89405878451337658115",
                  "cellid": "1365023",
                  "lac": "146",
                  "mcc": "405",
                  "mnc": "874"
              },
              "mode": "dhcp",
              "ip": "192.168.1.1",
              "subnet": "255.255.255.0",
              "gateway": "192.168.1.1",
              "dns": "8.8.8.8",
              "internet": "false",
              "wan": "false"
          }
      },
      "modules":{
          "rs232":{
              
          }
      }
  }
  ]
  
  
  
}
