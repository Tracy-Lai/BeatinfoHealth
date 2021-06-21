import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersDetailDialogComponent } from './users-detail-dialog.component';

describe('UsersDetailDialogComponent', () => {
  let component: UsersDetailDialogComponent;
  let fixture: ComponentFixture<UsersDetailDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersDetailDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
