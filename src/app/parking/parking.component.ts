import { Component, OnInit } from '@angular/core';
import {ParkingService} from "./parking.service";
import {Subscription} from "rxjs/Subscription";

@Component({
  selector: 'app-parking',
  templateUrl: './parking.component.html',
  styleUrls: ['./parking.component.css']
})
export class ParkingComponent implements OnInit {

  parkingData = {}
  subscription: Subscription

  constructor(private parkingService: ParkingService) {

    this.subscription = this.parkingService.getParkings().subscribe((parkings) => {
      this.parkingData = parkings

      console.log('parkingData', this.parkingData);
    })

    console.log('jolo wags')
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
