import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiemusComponent } from './apiemus.component';

describe('ApiemusComponent', () => {
  let component: ApiemusComponent;
  let fixture: ComponentFixture<ApiemusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApiemusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApiemusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
