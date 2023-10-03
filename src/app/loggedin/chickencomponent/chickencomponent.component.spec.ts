import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickencomponentComponent } from './chickencomponent.component';

describe('ChickencomponentComponent', () => {
  let component: ChickencomponentComponent;
  let fixture: ComponentFixture<ChickencomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChickencomponentComponent]
    });
    fixture = TestBed.createComponent(ChickencomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
