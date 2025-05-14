import { Routes } from '@angular/router';
import { CalculatorComponent } from '../components/calculator/calculator.component';
import { HomeComponent } from '../components/home/home.component';
import { PayDetailsComponent } from '../components/pay-details/pay-details.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'pay', component: PayDetailsComponent},
  { path: 'calculator', component: CalculatorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' }
];
