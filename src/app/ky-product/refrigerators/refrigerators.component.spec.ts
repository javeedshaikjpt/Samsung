import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefrigeratorsComponent } from './refrigerators.component';

describe('RefrigeratorsComponent', () => {
  let component: RefrigeratorsComponent;
  let fixture: ComponentFixture<RefrigeratorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefrigeratorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefrigeratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
