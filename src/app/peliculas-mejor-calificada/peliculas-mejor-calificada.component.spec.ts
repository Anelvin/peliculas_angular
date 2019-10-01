import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasMejorCalificadaComponent } from './peliculas-mejor-calificada.component';

describe('PeliculasMejorCalificadaComponent', () => {
  let component: PeliculasMejorCalificadaComponent;
  let fixture: ComponentFixture<PeliculasMejorCalificadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasMejorCalificadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasMejorCalificadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
