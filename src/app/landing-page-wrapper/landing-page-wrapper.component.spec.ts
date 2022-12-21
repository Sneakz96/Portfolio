import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageWrapperComponent } from './landing-page-wrapper.component';

describe('LandingPageWrapperComponent', () => {
  let component: LandingPageWrapperComponent;
  let fixture: ComponentFixture<LandingPageWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandingPageWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
