import { Routes } from '@angular/router';
import { DeviceComponent } from './components/device/device.component';
import { ModulesComponent } from './components/modules/modules.component';
import { CANComponent } from './components/can/can.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { RS232Component } from './components/rs232/rs232.component';
import { IOComponent } from './components/io/io.component';
import { RS485Component } from './components/rs485/rs485.component';
import { InterfaceComponent } from './components/interface/interface.component';
import { WIRELESSComponent } from './components/wireless/wireless.component';
import { LogsComponent } from './components/logs/logs.component';

export const routes: Routes = [
  { path: 'device', component: DeviceComponent,data: { title: 'Device' } },
  { path: 'rs232', component: ModulesComponent,data: { title: 'RS232' }  },
  { path: 'can', component: CANComponent,data: { title: 'CAN' }  },
  { path: 'cloud', component: CloudComponent,data: { title: 'Cloud' }  },
  { path: 'RS232', component: RS232Component,data: { title: 'RS232' }  },
  { path: 'io', component: IOComponent,data: { title: 'IO' }  },
  { path: 'rs485', component: RS485Component,data: { title: 'RS485' }  },
  { path: 'Interface', component: InterfaceComponent,data: { title: 'INTERFACES' }  },
  { path: 'wireless', component: WIRELESSComponent,data: { title: 'WIRELESS' }  },
  { path: 'logs', component: LogsComponent,data: { title: 'LOGS' }  },
  { path: '', redirectTo: '/device', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/device' },
];
