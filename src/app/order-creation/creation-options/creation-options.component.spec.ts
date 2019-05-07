import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreationOptionsComponent } from './creation-options.component';

describe('CreationOptionsComponent', () => {
  let component: CreationOptionsComponent;
  let fixture: ComponentFixture<CreationOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreationOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
