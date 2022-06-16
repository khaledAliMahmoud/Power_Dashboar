import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './shared/home/home.component';
import { LogInComponent } from './shared/log-in/log-in.component';
import { LogUpComponent } from './shared/log-up/log-up.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { ControlRoomComponent } from './shared/control-room/control-room.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { ElementsComponent } from './shared/elements/elements.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { LogOutComponent } from './shared/log-out/log-out.component';
import { DashBoaredComponent } from './shared/dash-boared/dash-boared.component';
import { FormsModule } from '@angular/forms';
import { RadarChartComponent } from './shared/radar-chart/radar-chart.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LogInComponent,
    LogUpComponent,
    NavbarComponent,
    SidebarComponent,
    ControlRoomComponent,
    SettingsComponent,
    NotificationsComponent,
    ElementsComponent,
    NotFoundComponent,
    LogOutComponent,
    DashBoaredComponent,
    RadarChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
