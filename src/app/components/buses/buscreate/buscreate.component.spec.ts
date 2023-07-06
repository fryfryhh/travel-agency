import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscreateComponent } from './buscreate.component';

describe('BuscreateComponent', () => {
  let component: BuscreateComponent;
  let fixture: ComponentFixture<BuscreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuscreateComponent]
    });
    fixture = TestBed.createComponent(BuscreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
