import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputCompComponent } from './output-comp.component';

describe('OutputCompComponent', () => {
  let component: OutputCompComponent;
  let fixture: ComponentFixture<OutputCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OutputCompComponent]
    });
    fixture = TestBed.createComponent(OutputCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
