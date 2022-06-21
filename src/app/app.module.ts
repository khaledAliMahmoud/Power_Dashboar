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
    ToastModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent],
})
export class AppModule {}
