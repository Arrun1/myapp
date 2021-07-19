import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FpsGamesComponent } from './fps-games.component';

describe('FpsGamesComponent', () => {
  let component: FpsGamesComponent;
  let fixture: ComponentFixture<FpsGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FpsGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FpsGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
