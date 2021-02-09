import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PaymentconfirPage } from './paymentconfir.page';

describe('PaymentconfirPage', () => {
  let component: PaymentconfirPage;
  let fixture: ComponentFixture<PaymentconfirPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaymentconfirPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PaymentconfirPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
