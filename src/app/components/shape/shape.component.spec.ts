import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShapeComponent } from './shape.component';

describe('ModuloComponent', () => {
  let component: ShapeComponent;
  let fixture: ComponentFixture<ShapeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShapeComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ShapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
