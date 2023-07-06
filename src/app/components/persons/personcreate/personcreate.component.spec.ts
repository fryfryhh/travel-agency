import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersoncreateComponent } from './personcreate.component';

describe('PersoncreateComponent', () => {
  let component: PersoncreateComponent;
  let fixture: ComponentFixture<PersoncreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PersoncreateComponent]
    });
    fixture = TestBed.createComponent(PersoncreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
