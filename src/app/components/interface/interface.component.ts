import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header.component';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-in-interface',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,HeaderComponent],
  templateUrl: './interface.component.html',
  styleUrl: './interface.component.scss',
})
export class InterfaceComponent implements OnInit {
  title: string = '';
  networkConfigForm!: FormGroup;
  constructor(private route: ActivatedRoute,private fb: FormBuilder) {}

  ngOnInit(): void {
    this.route.data.subscribe((data: any) => {
      this.title = data.title;
    });
    this.initializeForm();
  }
 
  initializeForm() {
    this.networkConfigForm = this.fb.group({
      modem: this.fb.group({
        gsmModule: [false],
        status: [false],
        provider: ['JIO4G'],
        network: ['Searching; N/A; No Service'],
        imei: ['354721880135408'],
        simcard: this.fb.group({
          imsi: ['894950484162365761'],
          iccid: ['8945078451337658115'],
          ccellid: ['1365023'],
          lac: ['146'],
          mcc: ['405'],
          mnc: ['874'],
        }),
        ipSettings: this.fb.group({
          GSMmode: ['DHCP'],
          ipAddress: ['192.168.1.21'],
          subnet: ['255.255.255.0'],
          gateway: ['192.168.1.1'],
          dns: ['8.8.8.8'],
        }),
      }),
      wired: this.fb.group({
        ethernetModule: [true],
        status: [true],
        macAddress: ['84:d0:8e:cd:54:99'],
        hostname: ['Neo-a2e491'],
        ipSettings: this.fb.group({
          wiredmode: ['DHCP'],
          ipAddress: ['192.168.1.21'],
          subnet: ['255.255.255.0'],
          gateway: ['192.168.1.1'],
          dns: ['8.8.8.8'],
        }),
        internetGateway: this.fb.group({
          host: ['google.com'],
          port: ['80'],
        }),
      }),
    });
  }

  saveSettings() {
    console.log('Saved Config:', this.networkConfigForm.value);
    // You can send the form data to your server here
  }

  cancelSettings() {
    this.networkConfigForm.reset();
  }
  
}
