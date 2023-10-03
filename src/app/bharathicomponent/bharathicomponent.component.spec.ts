import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BharathicomponentComponent } from './bharathicomponent.component';

describe('BharathicomponentComponent', () => {
  let component: BharathicomponentComponent;
  let fixture: ComponentFixture<BharathicomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BharathicomponentComponent]
    });
    fixture = TestBed.createComponent(BharathicomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
