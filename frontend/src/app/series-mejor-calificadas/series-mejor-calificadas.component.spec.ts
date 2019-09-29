import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriesMejorCalificadasComponent } from './series-mejor-calificadas.component';

describe('SeriesMejorCalificadasComponent', () => {
  let component: SeriesMejorCalificadasComponent;
  let fixture: ComponentFixture<SeriesMejorCalificadasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeriesMejorCalificadasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesMejorCalificadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
