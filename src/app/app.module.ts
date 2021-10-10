import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LeftSidebarComponent } from './shared/left-sidebar/left-sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardEmptyComponent } from './dashboard-empty/dashboard-empty.component';
import { UserInfoComponent } from './shared/left-sidebar/user-info/user-info.component';
import { ButtonsGroupComponent } from './shared/left-sidebar/buttons-group/buttons-group.component';
import { ProfileCompletedComponent } from './shared/left-sidebar/profile-completed/profile-completed.component';
import { WhitePanelComponent } from './shared/white-panel/white-panel.component';
import { RightSidebarComponent } from './shared/right-sidebar/right-sidebar.component';
import { PageOptionComponent } from './shared/page-option/page-option.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CompanyPhaseComponent } from './shared/left-sidebar/company-phase/company-phase.component';
import { DoughnutPanelComponent } from './dashboard/doughnut-panel/doughnut-panel.component';
import { BarPanelComponent } from './dashboard/bar-panel/bar-panel.component';
import { PitchComponent } from './pitch/pitch.component';
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LeftSidebarComponent,
    RightSidebarComponent,
    UserInfoComponent,
    DashboardComponent,
    ButtonsGroupComponent,
    DashboardEmptyComponent,
    ProfileCompletedComponent,
    WhitePanelComponent,
    PageOptionComponent,
    CompanyPhaseComponent,
    DoughnutPanelComponent,
    BarPanelComponent,
    PitchComponent,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ChartsModule,
    MatSelectModule,
    MatTooltipModule
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library:FaIconLibrary){
  
  }
}
