import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakscomponentComponent } from './snakscomponent.component';

describe('SnakscomponentComponent', () => {
  let component: SnakscomponentComponent;
  let fixture: ComponentFixture<SnakscomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SnakscomponentComponent]
    });
    fixture = TestBed.createComponent(SnakscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
