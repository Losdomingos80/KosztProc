import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlownikiComponent } from './slowniki.component';

describe('SlownikiComponent', () => {
  let component: SlownikiComponent;
  let fixture: ComponentFixture<SlownikiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlownikiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlownikiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
