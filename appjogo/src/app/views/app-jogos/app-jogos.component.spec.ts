import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppJogosComponent } from './app-jogos.component';

describe('AppJogosComponent', () => {
  let component: AppJogosComponent;
  let fixture: ComponentFixture<AppJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppJogosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
