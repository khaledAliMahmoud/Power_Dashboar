import { ProtectionGuard } from './protection.guard';
import { OperationComponent } from './shared/operation/operation.component';
import { LineChartComponent } from './shared/line-chart/line-chart.component';
import { ProgressChartComponent } from './shared/progress-chart/progress-chart.component';
import { BoxesComponent } from './shared/boxes/boxes.component';
import { DispenserComponent } from './shared/dispenser/dispenser.component';
import { LogOutComponent } from './shared/log-out/log-out.component';
import { DashBoaredComponent } from './shared/dash-boared/dash-boared.component';
import { LogUpComponent } from './shared/log-up/log-up.component';
import { LogInComponent } from './shared/log-in/log-in.component';
import { ControlRoomComponent } from './shared/control-room/control-room.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/home/home.component';
import { SettingsComponent } from './shared/settings/settings.component';
import { NotificationsComponent } from './shared/notifications/notifications.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ElementsComponent } from './shared/elements/elements.component';

const routes: Routes = [
  {path:"home", canActivate:[ProtectionGuard] ,component:HomeComponent},
  {path:"control", canActivate:[ProtectionGuard] , component:ControlRoomComponent},
  {path:"notifications", canActivate:[ProtectionGuard] ,component:NotificationsComponent},
  {path:"elements", canActivate:[ProtectionGuard] ,component:ElementsComponent},
  {path:"dashboared", canActivate:[ProtectionGuard] ,component:DashBoaredComponent},
  {path:"login", component:LogInComponent},
  {path:"logout", component:LogOutComponent},
  {path:"**", component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
