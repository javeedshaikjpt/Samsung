import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashersComponent } from './washers.component';

describe('WashersComponent', () => {
  let component: WashersComponent;
  let fixture: ComponentFixture<WashersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
