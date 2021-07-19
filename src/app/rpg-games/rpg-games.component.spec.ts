import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RpgGamesComponent } from './rpg-games.component';

describe('RpgGamesComponent', () => {
  let component: RpgGamesComponent;
  let fixture: ComponentFixture<RpgGamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RpgGamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RpgGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
