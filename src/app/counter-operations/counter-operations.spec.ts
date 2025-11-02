import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterOperations } from './counter-operations';

describe('CounterOperations', () => {
  let component: CounterOperations;
  let fixture: ComponentFixture<CounterOperations>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CounterOperations]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterOperations);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
