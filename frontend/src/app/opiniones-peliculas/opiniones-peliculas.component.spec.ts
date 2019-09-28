import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionesPeliculasComponent } from './opiniones-peliculas.component';

describe('OpinionesPeliculasComponent', () => {
  let component: OpinionesPeliculasComponent;
  let fixture: ComponentFixture<OpinionesPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionesPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionesPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
