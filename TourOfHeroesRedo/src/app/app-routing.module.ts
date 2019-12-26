import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //imports RouterModule and Routes so the app can have routing functionality
import { HeroesComponent } from './heroes/heroes.component'; //where to go once the corresponding route is configured 
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from '../app/hero-detail/hero-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'}, // empty path routes to /dashboard
  { path: 'heroeslist', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'details/:id', component: HeroDetailComponent } //The colon (:) in the path indicates that :id is a placeholder for a specific hero id.
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
