import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoDoctor } from '../entity/infoDoctor';
import {ServiceHospitalService } from 'src/app/service/service-hospital.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-set-doctor',
  templateUrl: './set-doctor.component.html',
  styleUrls: ['./set-doctor.component.css']
})
export class SetDoctorComponent implements OnInit {
  
  public doctor:InfoDoctor = {} as InfoDoctor;
  constructor(private service:ServiceHospitalService,private router:Router , private fb:FormBuilder) { }

  doctorForm!:FormGroup;

  ngOnInit(): void {

    this.doctorForm=this.fb.group({

      "name": [null,[Validators.required,Validators.pattern('^[a-zA-Z ]*')]],
      "age": [null,[Validators.required,Validators.pattern('^[0-9]*')]],
      "specialist":[null,[Validators.required]],
      "gender":[null,[Validators.required]]
      

    })
  }
  saveDoctor(){
    this.service.SetDoctor(this.doctor).subscribe({
      next: (data)=>{
        alert("DOCTOR ADDED TO THE HOSPITAL DATABASE");
        this.router.navigate(['/']).then();
        
      },
      error: (e)=>{
        this.router.navigate(['/doctors/doctor/add']).then();
        alert("Error occured ! Try again..");

      }
    })
  }


  get name()
  {
    return this.doctorForm.get('name');
  }
  get age()
  {
    return this.doctorForm.get("age");
  }

  get specialist()
  {
    return this.doctorForm.get("specialist");
  }
  get gender()
  {
    return this.doctorForm.get("gender");
  }
 

  

}
