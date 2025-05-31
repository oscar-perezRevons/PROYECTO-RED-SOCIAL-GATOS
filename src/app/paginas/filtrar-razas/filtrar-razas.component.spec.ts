import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrarRazasComponent } from './filtrar-razas.component';

describe('FiltrarRazasComponent', () => {
  let component: FiltrarRazasComponent;
  let fixture: ComponentFixture<FiltrarRazasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltrarRazasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltrarRazasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
