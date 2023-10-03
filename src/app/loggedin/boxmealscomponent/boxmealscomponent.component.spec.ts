import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxmealscomponentComponent } from './boxmealscomponent.component';

describe('BoxmealscomponentComponent', () => {
  let component: BoxmealscomponentComponent;
  let fixture: ComponentFixture<BoxmealscomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxmealscomponentComponent]
    });
    fixture = TestBed.createComponent(BoxmealscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
