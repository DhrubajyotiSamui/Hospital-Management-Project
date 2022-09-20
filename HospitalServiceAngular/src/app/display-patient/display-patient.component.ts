import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InfoPatient } from '../entity/infoPatient';
import {ServiceHospitalService } from 'src/app/service/service-hospital.service';

@Component({
  selector: 'app-display-patient',
  templateUrl: './display-patient.component.html',
  styleUrls: ['./display-patient.component.css']
})
export class DisplayPatientComponent implements OnInit {
  public id:number | null= null ;
  public patient:InfoPatient = {} as InfoPatient;
  public errorMessage:string|null = null;
  hidden=true;

  constructor(private service:ServiceHospitalService , private router :Router) { }

  ngOnInit(): void {
    
  }
  displayPatientInfo(){
    if(this.id == null){
    
    }
    else if(this.id){
      this.service.showPatient(this.id).subscribe({
        next : (data)=>{
          console.log(data);
          this.patient = data;
          
        },
        error : (e)=>{
          
          this.errorMessage = "No such patient there in the database";
          alert(this.errorMessage);
        }

      });
    }
    }
    hidetable(){
      this.hidden=false;
  
    }


    deleteListedPatient(id:any)
    {
      alert("Are you sure want to delete")
      this.service.deletePatient(id).subscribe({
        next:(res)=>{
          alert("deleted successfully");
          this.hidden=false;
        }
      })
    }
  
  }

