import { Routes } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SecondComponentComponent } from './second-component/second-component.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'firstComponent', component: FirstComponentComponent },
    { path: 'secondComponent', component: SecondComponentComponent },
];
