import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyDetalleComponent } from './company-detalle.component';

describe('CompanyDetalleComponent', () => {
  let component: CompanyDetalleComponent;
  let fixture: ComponentFixture<CompanyDetalleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyDetalleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
