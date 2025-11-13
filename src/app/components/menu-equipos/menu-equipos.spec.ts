import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuEquipos } from './menu-equipos';

describe('MenuEquipos', () => {
  let component: MenuEquipos;
  let fixture: ComponentFixture<MenuEquipos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuEquipos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuEquipos);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
