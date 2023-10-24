import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NuevoviajePage } from './nuevoviaje.page';

describe('NuevoviajePage', () => {
  let component: NuevoviajePage;
  let fixture: ComponentFixture<NuevoviajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NuevoviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
