import { Routes } from '@angular/router';
import { DeviceComponent } from './components/device/device.component';

export const routes: Routes = [
    { path: 'device', component: DeviceComponent },
  { path: '', redirectTo: '/device', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/device' } 
];
