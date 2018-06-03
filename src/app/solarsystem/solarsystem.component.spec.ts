import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarsystemComponent } from './solarsystem.component';

describe('SolarsystemComponent', () => {
  let component: SolarsystemComponent;
  let fixture: ComponentFixture<SolarsystemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarsystemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarsystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
