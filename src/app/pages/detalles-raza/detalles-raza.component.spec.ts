import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesRazaComponent } from './detalles-raza.component';

describe('DetallesRazaComponent', () => {
  let component: DetallesRazaComponent;
  let fixture: ComponentFixture<DetallesRazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesRazaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
