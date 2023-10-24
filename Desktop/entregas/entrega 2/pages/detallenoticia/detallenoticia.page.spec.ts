import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallenoticiaPage } from './detallenoticia.page';

describe('DetallenoticiaPage', () => {
  let component: DetallenoticiaPage;
  let fixture: ComponentFixture<DetallenoticiaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetallenoticiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
