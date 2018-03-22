import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseColectionComponent } from './firebase-colection.component';

describe('FirebaseColectionComponent', () => {
  let component: FirebaseColectionComponent;
  let fixture: ComponentFixture<FirebaseColectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseColectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseColectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
