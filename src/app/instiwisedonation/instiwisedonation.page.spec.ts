import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstiwisedonationPage } from './instiwisedonation.page';

describe('InstiwisedonationPage', () => {
  let component: InstiwisedonationPage;
  let fixture: ComponentFixture<InstiwisedonationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstiwisedonationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstiwisedonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
