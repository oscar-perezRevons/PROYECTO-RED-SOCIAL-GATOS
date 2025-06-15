import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoEncontradaComponentComponent } from './pagina-no-encontrada-component.component';

describe('PaginaNoEncontradaComponentComponent', () => {
  let component: PaginaNoEncontradaComponentComponent;
  let fixture: ComponentFixture<PaginaNoEncontradaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaNoEncontradaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaNoEncontradaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
