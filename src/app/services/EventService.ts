import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventService {
  public formOtp = new Subject();
  public backPage = new Subject();
  public formClassific = new Subject();
  formOtp$ = this.formOtp.asObservable();

  publishFormOtp() {
    this.formOtp.next();
  }
}