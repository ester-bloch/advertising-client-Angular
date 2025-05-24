import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CalculatorComponent } from '../components/calculator/calculator.component';
import { HomeComponent } from '../components/home/home.component';
import { PayDetailsComponent } from '../components/pay-details/pay-details.component';
import { OrderStatusComponent } from '../components/order-status/order-status.component';
import { AllTheTablesComponent } from '../components/all-the-tables/all-the-tables.component';
import { ToSendMassageComponent } from '../components/to-send-massage/to-send-massage.component';
export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'pay', component: PayDetailsComponent},
  { path: 'calculator', component: CalculatorComponent },
  { path: 'status' ,component:OrderStatusComponent},
  { path: 'tables' ,component:AllTheTablesComponent},
  { path: 'contect' ,component:ToSendMassageComponent},

  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' },
];
