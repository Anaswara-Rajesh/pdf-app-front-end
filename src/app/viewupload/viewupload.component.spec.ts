import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewuploadComponent } from './viewupload.component';

describe('ViewuploadComponent', () => {
  let component: ViewuploadComponent;
  let fixture: ComponentFixture<ViewuploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewuploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewuploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
