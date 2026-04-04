import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiddenInside } from './hidden-inside';

describe('HiddenInside', () => {
  let component: HiddenInside;
  let fixture: ComponentFixture<HiddenInside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HiddenInside]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiddenInside);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
