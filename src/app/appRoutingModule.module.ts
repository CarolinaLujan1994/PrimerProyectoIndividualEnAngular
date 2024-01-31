import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FirstComponentComponent } from './first-component/first-component.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { routes } from './app.routes'
import { SecondComponentComponent } from './second-component/second-component.component';

@NgModule({
  declarations: [
    DashboardComponent,
    FirstComponentComponent,
    SecondComponentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {}