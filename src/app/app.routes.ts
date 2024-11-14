import { Routes } from '@angular/router';
import { FormularioUpgradeComponent } from './formulario-upgrade/formulario-upgrade.component';

export const routes: Routes = [
  { path: '', redirectTo: 'expo-tec-upgrade', pathMatch: 'full' },
  { path: 'expo-tec-upgrade', component: FormularioUpgradeComponent },

//   { path: '', redirectTo: 'formulario-upgrade', pathMatch: 'full' },
//   { path: 'formulario-upgrade', component: FormularioUpgradeComponent }
];
