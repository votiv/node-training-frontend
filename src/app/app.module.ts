import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component'
import { ParkingService } from "./parking/parking.service";
import { ParkingComponent } from './parking/parking.component';
import { UserComponent } from './user/user.component'

@NgModule({
  declarations: [
    AppComponent,
    ParkingComponent,
    UserComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [ParkingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
