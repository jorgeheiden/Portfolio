import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Proyectos2Component } from './proyectos2.component';

describe('Proyectos2Component', () => {
  let component: Proyectos2Component;
  let fixture: ComponentFixture<Proyectos2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Proyectos2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Proyectos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
