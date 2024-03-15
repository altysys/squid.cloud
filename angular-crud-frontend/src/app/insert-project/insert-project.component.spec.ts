import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertProjectComponent } from './insert-project.component';

describe('InsertUserComponent', () => {
  let component: InsertProjectComponent;
  let fixture: ComponentFixture<InsertProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertProjectComponent],
    });
    fixture = TestBed.createComponent(InsertProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
