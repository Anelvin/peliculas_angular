import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SerieDetalleComponent } from './serie-detalle.component';

describe('SerieDetalleComponent', () => {
  let component: SerieDetalleComponent;
  let fixture: ComponentFixture<SerieDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SerieDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SerieDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
