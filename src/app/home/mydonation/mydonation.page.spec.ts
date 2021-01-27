import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MydonationPage } from './mydonation.page';

describe('MydonationPage', () => {
  let component: MydonationPage;
  let fixture: ComponentFixture<MydonationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MydonationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MydonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
