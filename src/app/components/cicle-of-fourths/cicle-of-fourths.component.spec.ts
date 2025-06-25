import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CicleOfFourthsComponent } from './cicle-of-fourths.component';

describe('CicleOfFourthsComponent', () => {
  let component: CicleOfFourthsComponent;
  let fixture: ComponentFixture<CicleOfFourthsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CicleOfFourthsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CicleOfFourthsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
