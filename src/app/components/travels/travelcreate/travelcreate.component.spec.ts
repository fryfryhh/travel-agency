import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelcreateComponent } from './travelcreate.component';

describe('TravelcreateComponent', () => {
  let component: TravelcreateComponent;
  let fixture: ComponentFixture<TravelcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TravelcreateComponent]
    });
    fixture = TestBed.createComponent(TravelcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
