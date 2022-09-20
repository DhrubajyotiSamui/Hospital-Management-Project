/*import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-set-patient',
  templateUrl: './set-patient.component.html',
  styleUrls: ['./set-patient.component.css']
})
export class SetPatientComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}*/

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InfoDoctor } from '../entity/infoDoctor';
import { InfoPatient } from '../entity/infoPatient';
import { ServiceHospitalService } from '../service/service-hospital.service';

@Component({
  selector: 'app-set-patient',
  templateUrl: './set-patient.component.html',
  styleUrls: ['./set-patient.component.css']
})
export class SetPatientComponent implements OnInit {

  public patient:InfoPatient ={} as InfoPatient;
  public doctors:InfoDoctor[] = {} as InfoDoctor[];
  public errorMessage:string | null = null;


  patientForm!:FormGroup;

  constructor(private service:ServiceHospitalService , private router:Router, private fb:FormBuilder ) { }

  ngOnInit(): void {
    this.service.listAllDoctors().subscribe({
      next:(data) =>{
        this.doctors = data;
      }
    })


    this.patientForm = this.fb.group({
      "name":['',[Validators.required]],
      "age":['',[Validators.required]],
      "visitedDoctor":['',[Validators.required]],
      "dataOfVist":['',[Validators.required]],
      "prescription":['',[Validators.required]],
    });


  }


  savePatient(){
    this.service.SetPatient(this.patient).subscribe({
      next:(data)=>{
        alert("Patient Added to the database")
        this.router.navigate(['/']).then();
      },
      error:(e)=>{
        this.errorMessage = e;
        console.warn(e);
        alert("Invalid Information")
        this.router.navigate(['/patients/patient/add']).then();
      }
    });

  }



  get name()
  {
    return this.patientForm.get('name');
  }
  get age()
  {
    return this.patientForm.get('age');
  }
  get dataOfVist()
  {
    return this.patientForm.get('dataOfVist');
  }
  get prescription()
  {
    return this.patientForm.get('prescription');
  }
  get visitedDoctor()
  {
    return this.patientForm.get('prescription');
  }


  


}

