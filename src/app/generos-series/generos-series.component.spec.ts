import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerosSeriesComponent } from './generos-series.component';

describe('GenerosSeriesComponent', () => {
  let component: GenerosSeriesComponent;
  let fixture: ComponentFixture<GenerosSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerosSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerosSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
