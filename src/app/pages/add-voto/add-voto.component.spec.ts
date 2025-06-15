import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVotoComponent } from './add-voto.component';

describe('AddVotoComponent', () => {
  let component: AddVotoComponent;
  let fixture: ComponentFixture<AddVotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddVotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
