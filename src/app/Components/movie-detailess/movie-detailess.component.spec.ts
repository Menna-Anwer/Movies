import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailessComponent } from './movie-detailess.component';

describe('MovieDetailessComponent', () => {
  let component: MovieDetailessComponent;
  let fixture: ComponentFixture<MovieDetailessComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MovieDetailessComponent]
    });
    fixture = TestBed.createComponent(MovieDetailessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
