import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieTemporadasComponent } from './serie-temporadas.component';

describe('SerieTemporadasComponent', () => {
  let component: SerieTemporadasComponent;
  let fixture: ComponentFixture<SerieTemporadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieTemporadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieTemporadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
