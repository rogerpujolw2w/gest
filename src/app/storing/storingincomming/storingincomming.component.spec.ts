import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoringincommingComponent } from './storingincomming.component';

describe('StoringincommingComponent', () => {
  let component: StoringincommingComponent;
  let fixture: ComponentFixture<StoringincommingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoringincommingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoringincommingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
