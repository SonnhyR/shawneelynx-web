import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aethoris } from './aethoris';

describe('Aethoris', () => {
  let component: Aethoris;
  let fixture: ComponentFixture<Aethoris>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aethoris]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Aethoris);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
