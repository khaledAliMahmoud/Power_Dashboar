import { RouterModule } from '@angular/router';
import {  NgModule } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng/menubar';
import { AvatarModule } from 'primeng/avatar';
import { SkeletonModule } from 'primeng/skeleton';
import { DialogService } from 'primeng/dynamicdialog';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenuModule } from 'primeng/panelmenu';
import { SelectButtonModule } from 'primeng/selectbutton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { TabViewModule } from 'primeng/tabview';
import { InputSwitchModule } from 'primeng/inputswitch';
import { MenuModule } from 'primeng/menu';
import { TabMenuModule } from 'primeng/tabmenu';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormsModule } from '@angular/forms';
import { RadarChartComponent } from './shared/radar-chart/radar-chart.component';
import { CalendarModule } from 'primeng/calendar';
import {ChartModule} from 'primeng/chart';
import {ToastModule} from 'primeng/toast';
import { BarChartComponent } from './shared/bar-chart/bar-chart.component';
import { BoxesComponent } from './shared/boxes/boxes.component';
import { DispenserComponent } from './shared/dispenser/dispenser.component';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { ProgressChartComponent } from './shared/progress-chart/progress-chart.component';
import { CommonModule } from '@angular/common';
import { OperationComponent } from './shared/operation/operation.component';
import { StationDetails1Component } from './shared/station-details1/station-details1.component';
import { StationDetails2Component } from './shared/station-details2/station-details2.component';
import { RadarComponent } from './shared/radar/radar.component';
import { OperationTableComponent } from './shared/operation-table/operation-table.component';
import { StasionModulesComponent } from './shared/stasion-modules/stasion-modules.component';
import { DispenserDetailsComponent } from './shared/dispenser-details/dispenser-details.component';
import { NotificationContentComponent } from './shared/notification-content/notification-content.component';
import { AlarmOverallComponent } from './shared/alarm-overall/alarm-overall.component';
import { AlarmStateComponent } from './shared/alarm-state/alarm-state.component';
import { AlarmChartsComponent } from './shared/alarm-charts/alarm-charts.component';
import { ElementTableComponent } from './shared/element-table/element-table.component';


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
    BarChartComponent,
    BoxesComponent,
    DispenserComponent,
    LineChartComponent,
    ProgressChartComponent,
    OperationComponent,
    StationDetails1Component,
    StationDetails2Component,
    RadarComponent,
    OperationTableComponent,
    StasionModulesComponent,
    DispenserDetailsComponent,
    NotificationContentComponent,
    AlarmOverallComponent,
    AlarmStateComponent,
    AlarmChartsComponent,
    ElementTableComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    AvatarModule,
    SkeletonModule,
    BreadcrumbModule,
    PanelMenuModule,
    SelectButtonModule,
    ConfirmDialogModule,
    CalendarModule,
    TabViewModule,
    InputSwitchModule,
    MenuModule,
    TabMenuModule,
    ProgressSpinnerModule,
    FormsModule,
    ChartModule,
    ToastModule,
    CommonModule,
    RouterModule,
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
