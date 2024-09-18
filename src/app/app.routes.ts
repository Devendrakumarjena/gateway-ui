import { Routes } from '@angular/router';
import { DeviceComponent } from './components/device/device.component';
import { ModulesComponent } from './components/modules/modules.component';

export const routes: Routes = [
  { path: 'device', component: DeviceComponent },
  { path: 'modules', component: ModulesComponent },
  { path: '', redirectTo: '/device', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/device' },
];
