import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcitiesdetailsComponent } from './editcitiesdetails.component';

describe('EditcitiesdetailsComponent', () => {
  let component: EditcitiesdetailsComponent;
  let fixture: ComponentFixture<EditcitiesdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcitiesdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcitiesdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
