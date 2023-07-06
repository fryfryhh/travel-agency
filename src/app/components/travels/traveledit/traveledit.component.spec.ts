import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraveleditComponent } from './traveledit.component';

describe('TraveleditComponent', () => {
  let component: TraveleditComponent;
  let fixture: ComponentFixture<TraveleditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraveleditComponent]
    });
    fixture = TestBed.createComponent(TraveleditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
