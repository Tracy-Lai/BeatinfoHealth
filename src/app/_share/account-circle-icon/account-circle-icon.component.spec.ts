import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountCircleIconComponent } from './account-circle-icon.component';

describe('AccountCircleIconComponent', () => {
  let component: AccountCircleIconComponent;
  let fixture: ComponentFixture<AccountCircleIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountCircleIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountCircleIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
