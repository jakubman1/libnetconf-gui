import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NetconfLibComponent } from './netconf-lib.component';

describe('NetconfLibComponent', () => {
  let component: NetconfLibComponent;
  let fixture: ComponentFixture<NetconfLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NetconfLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NetconfLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
