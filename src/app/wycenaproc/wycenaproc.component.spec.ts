import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WycenaprocComponent } from './wycenaproc.component';

describe('WycenaprocComponent', () => {
  let component: WycenaprocComponent;
  let fixture: ComponentFixture<WycenaprocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WycenaprocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WycenaprocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
