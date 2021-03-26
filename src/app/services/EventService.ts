import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {
  public formOtp = new Subject();
  public closemenu = new Subject();

  public backPage = new Subject();
  public formClassific = new Subject();
  //For Otp Updation
  formOtp$ = this.formOtp.asObservable();
  //For close Menu
  closemenu$ = this.closemenu.asObservable();

  publishFormOtp() {
    this.formOtp.next();
  }
  publishFormclosemenu() {
    this.closemenu.next();
  }
}