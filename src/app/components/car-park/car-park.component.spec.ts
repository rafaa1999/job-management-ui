import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarParkComponent } from './car-park.component';

describe('CarParkComponent', () => {
  let component: CarParkComponent;
  let fixture: ComponentFixture<CarParkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarParkComponent]
    });
    fixture = TestBed.createComponent(CarParkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
