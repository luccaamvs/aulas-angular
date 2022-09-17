import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuasviasComponent } from './duasvias.component';

describe('DuasviasComponent', () => {
  let component: DuasviasComponent;
  let fixture: ComponentFixture<DuasviasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuasviasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuasviasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
