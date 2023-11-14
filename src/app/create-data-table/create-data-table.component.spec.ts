import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDataTableComponent } from './create-data-table.component';

describe('CreateDataTableComponent', () => {
  let component: CreateDataTableComponent;
  let fixture: ComponentFixture<CreateDataTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateDataTableComponent]
    });
    fixture = TestBed.createComponent(CreateDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
