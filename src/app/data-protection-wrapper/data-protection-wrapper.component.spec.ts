import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataProtectionWrapperComponent } from './data-protection-wrapper.component';

describe('DataProtectionWrapperComponent', () => {
  let component: DataProtectionWrapperComponent;
  let fixture: ComponentFixture<DataProtectionWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DataProtectionWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataProtectionWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
