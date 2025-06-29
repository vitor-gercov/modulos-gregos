import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteTypeFilterComponent } from './note-type-filter.component';

describe('NoteTypeFilterComponent', () => {
  let component: NoteTypeFilterComponent;
  let fixture: ComponentFixture<NoteTypeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteTypeFilterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteTypeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
