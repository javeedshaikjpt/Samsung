import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindSolutionComponent } from './find-solution.component';

describe('FindSolutionComponent', () => {
  let component: FindSolutionComponent;
  let fixture: ComponentFixture<FindSolutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindSolutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
