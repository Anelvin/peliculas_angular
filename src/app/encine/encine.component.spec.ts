import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncineComponent } from './encine.component';

describe('EncineComponent', () => {
  let component: EncineComponent;
  let fixture: ComponentFixture<EncineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
