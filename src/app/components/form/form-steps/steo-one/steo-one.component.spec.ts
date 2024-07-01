import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SteoOneComponent } from './steo-one.component';

describe('SteoOneComponent', () => {
  let component: SteoOneComponent;
  let fixture: ComponentFixture<SteoOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SteoOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SteoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
