import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardEmptyComponent } from './dashboard-empty/dashboard-empty.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PitchComponent } from './pitch/pitch.component';

const routes: Routes = [
  {path:'' ,component: DashboardEmptyComponent , pathMatch:'full'},
  {path:'dashboard' ,component: DashboardComponent },
  {path:'pitch' ,component: PitchComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
