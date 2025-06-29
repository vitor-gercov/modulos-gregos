import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DominantHandFilterComponent } from './dominant-hand-filter.component';

describe('DominantHandFilterComponent', () => {
  let component: DominantHandFilterComponent;
  let fixture: ComponentFixture<DominantHandFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DominantHandFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DominantHandFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
