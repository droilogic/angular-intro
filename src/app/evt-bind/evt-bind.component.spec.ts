import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvtBindComponent } from './evt-bind.component';

describe('EvtBindComponent', () => {
  let component: EvtBindComponent;
  let fixture: ComponentFixture<EvtBindComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [EvtBindComponent]
    });
    fixture = TestBed.createComponent(EvtBindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
