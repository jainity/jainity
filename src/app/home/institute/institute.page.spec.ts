import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InstitutePage } from './institute.page';

describe('InstitutePage', () => {
  let component: InstitutePage;
  let fixture: ComponentFixture<InstitutePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstitutePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InstitutePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
