import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionesSeriesComponent } from './opiniones-series.component';

describe('OpinionesSeriesComponent', () => {
  let component: OpinionesSeriesComponent;
  let fixture: ComponentFixture<OpinionesSeriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionesSeriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionesSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
