import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeveragescomponentComponent } from './beveragescomponent.component';

describe('BeveragescomponentComponent', () => {
  let component: BeveragescomponentComponent;
  let fixture: ComponentFixture<BeveragescomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BeveragescomponentComponent]
    });
    fixture = TestBed.createComponent(BeveragescomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
