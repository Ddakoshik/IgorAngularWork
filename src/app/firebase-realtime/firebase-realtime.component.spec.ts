import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirebaseRealtimeComponent } from './firebase-realtime.component';

describe('FirebaseRealtimeComponent', () => {
  let component: FirebaseRealtimeComponent;
  let fixture: ComponentFixture<FirebaseRealtimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirebaseRealtimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirebaseRealtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
