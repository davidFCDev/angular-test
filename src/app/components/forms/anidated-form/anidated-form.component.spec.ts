import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnidatedFormComponent } from './anidated-form.component';

describe('AnidatedFormComponent', () => {
  let component: AnidatedFormComponent;
  let fixture: ComponentFixture<AnidatedFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AnidatedFormComponent]
    });
    fixture = TestBed.createComponent(AnidatedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
