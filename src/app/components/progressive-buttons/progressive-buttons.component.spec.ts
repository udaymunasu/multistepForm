import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressiveButtonsComponent } from './progressive-buttons.component';

describe('ProgressiveButtonsComponent', () => {
  let component: ProgressiveButtonsComponent;
  let fixture: ComponentFixture<ProgressiveButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressiveButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgressiveButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
