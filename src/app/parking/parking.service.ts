import { Injectable } from '@angular/core'
import { Http, Response } from "@angular/http"
import 'rxjs/add/operator/map'

@Injectable()
export class ParkingService {

  constructor(
    private http: Http
  ) {}

  getParkings() {
    return this.http.get('http://10.0.1.183:3000/parking')
      .map((res: Response) => res.json())
  }
}

// yolo swag
