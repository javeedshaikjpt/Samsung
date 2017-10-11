import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChromedeviceComponent } from './chromedevice.component';

describe('ChromedeviceComponent', () => {
  let component: ChromedeviceComponent;
  let fixture: ComponentFixture<ChromedeviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChromedeviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChromedeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
