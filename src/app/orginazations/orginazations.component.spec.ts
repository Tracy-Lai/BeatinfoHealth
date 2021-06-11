import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrginazationsComponent } from './orginazations.component';

describe('OrginazationsComponent', () => {
  let component: OrginazationsComponent;
  let fixture: ComponentFixture<OrginazationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrginazationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrginazationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
