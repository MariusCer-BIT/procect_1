import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduktaiComponent } from './produktai.component';

describe('ProduktaiComponent', () => {
  let component: ProduktaiComponent;
  let fixture: ComponentFixture<ProduktaiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduktaiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduktaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
