import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRazaComponent } from './add-raza.component';

describe('AddRazaComponent', () => {
  let component: AddRazaComponent;
  let fixture: ComponentFixture<AddRazaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddRazaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddRazaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
