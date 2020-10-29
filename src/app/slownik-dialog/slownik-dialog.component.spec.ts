import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlownikDialogComponent } from './slownik-dialog.component';

describe('SlownikDialogComponent', () => {
  let component: SlownikDialogComponent;
  let fixture: ComponentFixture<SlownikDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlownikDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlownikDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
