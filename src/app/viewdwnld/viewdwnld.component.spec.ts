import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdwnldComponent } from './viewdwnld.component';

describe('ViewdwnldComponent', () => {
  let component: ViewdwnldComponent;
  let fixture: ComponentFixture<ViewdwnldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewdwnldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdwnldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
