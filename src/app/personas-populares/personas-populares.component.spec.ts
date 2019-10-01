import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonasPopularesComponent } from './personas-populares.component';

describe('PersonasPopularesComponent', () => {
  let component: PersonasPopularesComponent;
  let fixture: ComponentFixture<PersonasPopularesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonasPopularesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonasPopularesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
