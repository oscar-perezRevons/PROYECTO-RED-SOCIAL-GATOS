import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVotoComponent } from './edit-voto.component';

describe('EditVotoComponent', () => {
  let component: EditVotoComponent;
  let fixture: ComponentFixture<EditVotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditVotoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditVotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
