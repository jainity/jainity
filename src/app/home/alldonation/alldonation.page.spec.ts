import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlldonationPage } from './alldonation.page';

describe('AlldonationPage', () => {
  let component: AlldonationPage;
  let fixture: ComponentFixture<AlldonationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldonationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlldonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
