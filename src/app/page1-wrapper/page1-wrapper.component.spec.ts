import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1WrapperComponent } from './page1-wrapper.component';

describe('Page1WrapperComponent', () => {
  let component: Page1WrapperComponent;
  let fixture: ComponentFixture<Page1WrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Page1WrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page1WrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
