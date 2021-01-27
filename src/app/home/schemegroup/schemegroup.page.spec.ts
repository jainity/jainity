import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchemegroupPage } from './schemegroup.page';

describe('SchemegroupPage', () => {
  let component: SchemegroupPage;
  let fixture: ComponentFixture<SchemegroupPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchemegroupPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchemegroupPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
