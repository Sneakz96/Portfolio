import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnflowComponent } from './learnflow.component';

describe('LearnflowComponent', () => {
  let component: LearnflowComponent;
  let fixture: ComponentFixture<LearnflowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnflowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnflowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
