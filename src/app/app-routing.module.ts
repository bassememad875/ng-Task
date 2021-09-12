import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEmptyComponent } from './dashboard-empty/dashboard-empty.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:'' ,component: DashboardEmptyComponent},
  {path:'dashboard' ,component: DashboardComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
