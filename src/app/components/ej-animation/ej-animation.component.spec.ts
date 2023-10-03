import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjAnimationComponent } from './ej-animation.component';

describe('EjAnimationComponent', () => {
  let component: EjAnimationComponent;
  let fixture: ComponentFixture<EjAnimationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EjAnimationComponent]
    });
    fixture = TestBed.createComponent(EjAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
