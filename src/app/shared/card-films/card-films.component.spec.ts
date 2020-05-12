import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFilmsComponent  } from './card-starships.component';

describe('CCardFilmsComponent ', () => {
  let component: CardFilmsComponent ;
  let fixture: ComponentFixture<CardFilmsComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFilmsComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFilmsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
