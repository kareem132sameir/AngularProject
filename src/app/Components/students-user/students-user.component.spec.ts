import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsUserComponent } from './students-user.component';

describe('StudentsUserComponent', () => {
  let component: StudentsUserComponent;
  let fixture: ComponentFixture<StudentsUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudentsUserComponent]
    });
    fixture = TestBed.createComponent(StudentsUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
