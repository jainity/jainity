import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchemedetailsPage } from './schemedetails.page';

describe('SchemedetailsPage', () => {
  let component: SchemedetailsPage;
  let fixture: ComponentFixture<SchemedetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemedetailsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchemedetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
