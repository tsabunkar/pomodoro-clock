import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortBreakComponent } from './short-break.component';

describe('ShortBreakComponent', () => {
  let component: ShortBreakComponent;
  let fixture: ComponentFixture<ShortBreakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortBreakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortBreakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
