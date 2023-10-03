import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KFCcomponentComponent } from './kfccomponent.component';

describe('KFCcomponentComponent', () => {
  let component: KFCcomponentComponent;
  let fixture: ComponentFixture<KFCcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KFCcomponentComponent]
    });
    fixture = TestBed.createComponent(KFCcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
