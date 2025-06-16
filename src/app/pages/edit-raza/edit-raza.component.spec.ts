import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRazaComponent } from './edit-raza.component';

describe('EditRazaComponent', () => {
  let component: EditRazaComponent;
  let fixture: ComponentFixture<EditRazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditRazaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
