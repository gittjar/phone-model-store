import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateserviceService {

todayDate() {
  let ndate = new Date();
  return ndate;
}


	
  constructor() { }
}
