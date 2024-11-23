import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModulosGregosComponent } from './modulos-gregos.component';

describe('ModulosGregosComponent', () => {
  let component: ModulosGregosComponent;
  let fixture: ComponentFixture<ModulosGregosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModulosGregosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModulosGregosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
