import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDriversComponent } from './dashboard-drivers.component';

describe('DashboardDriversComponent', () => {
  let component: DashboardDriversComponent;
  let fixture: ComponentFixture<DashboardDriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardDriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
