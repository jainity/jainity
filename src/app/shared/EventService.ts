import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class EventService{
  public formRefreshAnnouncedSource = new Subject();
  public formNew = new Subject();
  public pageTitle = new Subject();
  formRefreshSource$ = this.formRefreshAnnouncedSource.asObservable();
  formNew$ = this.formNew.asObservable();
  pageTitle$ = this.pageTitle.asObservable();

  publishFormRefresh(isEdit){
    this.formRefreshAnnouncedSource.next(isEdit)
  }
  publishFormNew(isEdit){
    this.formNew.next(isEdit)
  }
  publishPageTitle(pageTitle){
    this.pageTitle.next(pageTitle)
  }

}