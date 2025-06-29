import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapesComponent } from './shapes.component';

describe('ModulosGregosComponent', () => {
  let component: ShapesComponent;
  let fixture: ComponentFixture<ShapesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapesComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ShapesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
