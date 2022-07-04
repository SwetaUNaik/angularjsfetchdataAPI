import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntervaltimerComponent } from './intervaltimer.component';

describe('IntervaltimerComponent', () => {
  let component: IntervaltimerComponent;
  let fixture: ComponentFixture<IntervaltimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntervaltimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntervaltimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
