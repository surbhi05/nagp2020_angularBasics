import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  public log = (data: string) => {
    console.log(data);
  }
}
