import { Routes } from '@angular/router';
import { CalculatorComponent } from '../components/calculator/calculator.component';
import { HomeComponent } from '../components/home/home.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'calculator', component: CalculatorComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/home' }
];
