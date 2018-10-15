import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelimageComponent } from './modelimage.component';

describe('ModelimageComponent', () => {
  let component: ModelimageComponent;
  let fixture: ComponentFixture<ModelimageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModelimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
