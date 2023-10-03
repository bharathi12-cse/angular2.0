import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerscomponentComponent } from './burgerscomponent.component';

describe('BurgerscomponentComponent', () => {
  let component: BurgerscomponentComponent;
  let fixture: ComponentFixture<BurgerscomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurgerscomponentComponent]
    });
    fixture = TestBed.createComponent(BurgerscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
