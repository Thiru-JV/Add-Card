import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardnewComponent } from './cardnew.component';

describe('CardnewComponent', () => {
  let component: CardnewComponent;
  let fixture: ComponentFixture<CardnewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardnewComponent]
    });
    fixture = TestBed.createComponent(CardnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
