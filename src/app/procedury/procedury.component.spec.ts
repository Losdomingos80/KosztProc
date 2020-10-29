import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProceduryComponent } from './procedury.component';

describe('ProceduryComponent', () => {
  let component: ProceduryComponent;
  let fixture: ComponentFixture<ProceduryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProceduryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProceduryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
