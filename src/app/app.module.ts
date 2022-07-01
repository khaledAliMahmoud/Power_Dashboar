import { Router, RouterModule, Routes } from '@angular/router';
import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { MessageService, ConfirmationService } from 'primeng/api';
import { ProductserviceService } from './productservice.service';


import {TableModule} from 'primeng/table';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {FileUploadModule} from 'primeng/fileupload';
import {ToolbarModule} from 'primeng/toolbar';
import {RatingModule} from 'primeng/rating';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';

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
    HttpClientModule,
    ReactiveFormsModule,






    BrowserModule,
    BrowserAnimationsModule,
    TableModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
    InputTextModule,
    ProgressBarModule,
    HttpClientModule,
    FileUploadModule,
    ToolbarModule,
    RatingModule,
    FormsModule,
    RadioButtonModule,
    InputNumberModule,
    ConfirmDialogModule,
    InputTextareaModule,
    RouterModule.forRoot([
      {path:'',component: AppComponent}

		])
  ],
  providers: [ProductserviceService, MessageService, ConfirmationService,DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
