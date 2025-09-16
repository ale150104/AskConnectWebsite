import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { Ablauf } from './ablauf/ablauf';
import { Faq } from './faq/faq';
import { Preise } from './preise/preise';

export const routes: Routes = [ 
{ path: 'home', redirectTo: '', pathMatch: 'full'},
 { path: '', component: HomeComponent },
 { path: 'process', component: Ablauf},
{ path: 'faq', component: Faq},
// { path: 'prices', component: Preise}
]
