import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WykonaniaComponent } from './wykonania.component';

describe('WykonaniaComponent', () => {
  let component: WykonaniaComponent;
  let fixture: ComponentFixture<WykonaniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WykonaniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WykonaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
