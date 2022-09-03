import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExEventoComponent } from './ex-evento.component';

describe('ExEventoComponent', () => {
  let component: ExEventoComponent;
  let fixture: ComponentFixture<ExEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
