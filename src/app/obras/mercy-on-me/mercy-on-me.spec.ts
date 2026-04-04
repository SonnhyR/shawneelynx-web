import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MercyOnMe } from './mercy-on-me';

describe('MercyOnMe', () => {
  let component: MercyOnMe;
  let fixture: ComponentFixture<MercyOnMe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MercyOnMe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MercyOnMe);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
