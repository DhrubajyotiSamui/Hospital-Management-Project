import { NgModule } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { DisplayDoctorComponent } from './display-doctor.component';


describe('DisplayDoctorComponent', () => {
  let component: DisplayDoctorComponent;
  let fixture: ComponentFixture<DisplayDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayDoctorComponent ],
      imports:[ActivatedRoute,]
    })
    .compileComponents();
  });

  beforeEach(() => {

    fixture = TestBed.createComponent(DisplayDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
