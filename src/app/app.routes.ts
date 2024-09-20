import { Routes } from '@angular/router';
import { DeviceComponent } from './components/device/device.component';
import { ModulesComponent } from './components/modules/modules.component';
import { CANComponent } from './components/can/can.component';
import { CloudComponent } from './components/cloud/cloud.component';
import { RS232Component } from './components/rs232/rs232.component';
import { IOComponent } from './components/io/io.component';
import { RS485Component } from './components/rs485/rs485.component';

export const routes: Routes = [
  { path: 'device', component: DeviceComponent },
  { path: 'rs232', component: ModulesComponent },
  { path: 'can', component: CANComponent },
  { path: 'cloud', component: CloudComponent },
  { path: 'RS232', component: RS232Component },
  { path: 'io', component: IOComponent },
  { path: 'rs485', component: RS485Component },
  // { path: 'modules', component: ModulesComponent },
  // { path: 'modules', component: ModulesComponent },
  // { path: 'rs232', component: ModulesComponent },
  { path: '', redirectTo: '/device', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/device' },
];
