import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardConsigna } from './card-consigna';

describe('CardConsigna', () => {
  let component: CardConsigna;
  let fixture: ComponentFixture<CardConsigna>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardConsigna]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardConsigna);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
