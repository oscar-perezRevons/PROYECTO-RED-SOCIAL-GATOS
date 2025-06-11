import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleVotoComponent } from './detalle-voto.component';

describe('DetalleVotoComponent', () => {
  let component: DetalleVotoComponent;
  let fixture: ComponentFixture<DetalleVotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleVotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleVotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
