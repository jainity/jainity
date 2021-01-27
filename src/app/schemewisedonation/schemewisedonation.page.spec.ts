import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchemewisedonationPage } from './schemewisedonation.page';

describe('SchemewisedonationPage', () => {
  let component: SchemewisedonationPage;
  let fixture: ComponentFixture<SchemewisedonationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemewisedonationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchemewisedonationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
