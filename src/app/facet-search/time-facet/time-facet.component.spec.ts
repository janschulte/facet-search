import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFacetComponent } from './time-facet.component';

describe('TimeFacetComponent', () => {
  let component: TimeFacetComponent;
  let fixture: ComponentFixture<TimeFacetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeFacetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFacetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
