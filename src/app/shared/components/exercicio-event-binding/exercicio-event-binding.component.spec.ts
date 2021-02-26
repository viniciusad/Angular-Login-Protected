import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioEventBindingComponent } from './exercicio-event-binding.component';

describe('ExercicioEventBindingComponent', () => {
  let component: ExercicioEventBindingComponent;
  let fixture: ComponentFixture<ExercicioEventBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioEventBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioEventBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
