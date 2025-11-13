import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEquipos } from './home-equipos';

describe('HomeEquipos', () => {
  let component: HomeEquipos;
  let fixture: ComponentFixture<HomeEquipos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEquipos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEquipos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
