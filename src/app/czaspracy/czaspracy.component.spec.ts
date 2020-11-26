import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CzaspracyComponent } from './czaspracy.component';

describe('CzaspracyComponent', () => {
  let component: CzaspracyComponent;
  let fixture: ComponentFixture<CzaspracyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CzaspracyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CzaspracyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
