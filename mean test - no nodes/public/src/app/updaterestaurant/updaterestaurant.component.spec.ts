import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdaterestaurantComponent } from './updaterestaurant.component';

describe('UpdaterestaurantComponent', () => {
  let component: UpdaterestaurantComponent;
  let fixture: ComponentFixture<UpdaterestaurantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdaterestaurantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdaterestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
