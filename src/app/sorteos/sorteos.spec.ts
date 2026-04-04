import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Sorteos } from './sorteos';

describe('Sorteos', () => {
  let component: Sorteos;
  let fixture: ComponentFixture<Sorteos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Sorteos]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Sorteos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
