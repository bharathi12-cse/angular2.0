import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopnavcomponentComponent } from './topnavcomponent.component';

describe('TopnavcomponentComponent', () => {
  let component: TopnavcomponentComponent;
  let fixture: ComponentFixture<TopnavcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TopnavcomponentComponent]
    });
    fixture = TestBed.createComponent(TopnavcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
