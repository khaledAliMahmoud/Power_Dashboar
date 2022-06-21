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
  {path:"home", component:HomeComponent},
  {path:"control", component:ControlRoomComponent},
  {path:"settings", component:SettingsComponent},
  {path:"notifications", component:NotificationsComponent},
  {path:"elements", component:ElementsComponent},
  {path:"dashboared", component:DashBoaredComponent},
  {path:"dispenser", component:DispenserComponent},
  {path:"login", component:LogInComponent},
  {path:"logup", component:LogUpComponent},
  {path:"logout", component:LogOutComponent},
  {path:"**", component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
