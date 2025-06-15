import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNuevaImagenComponent } from './formulario-nueva-imagen.component';

describe('FormularioNuevaImagenComponent', () => {
  let component: FormularioNuevaImagenComponent;
  let fixture: ComponentFixture<FormularioNuevaImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormularioNuevaImagenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioNuevaImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
