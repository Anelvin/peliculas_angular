import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesPopularesComponent } from './series-populares.component';

describe('SeriesPopularesComponent', () => {
  let component: SeriesPopularesComponent;
  let fixture: ComponentFixture<SeriesPopularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesPopularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
