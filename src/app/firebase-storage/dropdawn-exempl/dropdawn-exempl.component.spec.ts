import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdawnExemplComponent } from './dropdawn-exempl.component';

describe('DropdawnExemplComponent', () => {
  let component: DropdawnExemplComponent;
  let fixture: ComponentFixture<DropdawnExemplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DropdawnExemplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdawnExemplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
