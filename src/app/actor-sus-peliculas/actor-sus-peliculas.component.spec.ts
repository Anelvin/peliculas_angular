import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActorSusPeliculasComponent } from './actor-sus-peliculas.component';

describe('ActorSusPeliculasComponent', () => {
  let component: ActorSusPeliculasComponent;
  let fixture: ComponentFixture<ActorSusPeliculasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActorSusPeliculasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorSusPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
