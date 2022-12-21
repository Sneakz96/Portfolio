import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprintWrapperComponent } from './imprint-wrapper.component';

describe('ImprintWrapperComponent', () => {
  let component: ImprintWrapperComponent;
  let fixture: ComponentFixture<ImprintWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImprintWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImprintWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
