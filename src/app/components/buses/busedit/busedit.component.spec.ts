import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuseditComponent } from './busedit.component';

describe('BuseditComponent', () => {
  let component: BuseditComponent;
  let fixture: ComponentFixture<BuseditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuseditComponent]
    });
    fixture = TestBed.createComponent(BuseditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
