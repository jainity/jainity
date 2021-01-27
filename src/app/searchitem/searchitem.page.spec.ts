import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchitemPage } from './searchitem.page';

describe('SearchitemPage', () => {
  let component: SearchitemPage;
  let fixture: ComponentFixture<SearchitemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchitemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchitemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
