import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { InfoDoctor } from '../entity/infoDoctor';
import { InfoPatient } from '../entity/infoPatient';

@Injectable({
  providedIn: 'root'
})
export class ServiceHospitalService {

  private serverUrl: string = `http://localhost:9595`;
  constructor(private httpClient: HttpClient) { }

  //error handling
  public handleError(error: HttpErrorResponse) {
    let errorMessage: string = ``;
    if (error.error instanceof ErrorEvent) {
      //client error
      errorMessage = `Error : ${error.error.message}`;
    }
    else {
      //server error
      errorMessage = `status : ${error.status}`;
    }
    return throwError(() => errorMessage);
  }

  //Get all Doctors
  public listAllDoctors(): Observable<InfoDoctor[]> {
    let dataUrl:string = `http://localhost:9595/doctor`;
    return this.httpClient.get<InfoDoctor[]>(dataUrl).pipe(catchError(this.handleError));
  }
  //Show Doctor by name
  public showDoctor(id:number):Observable<InfoDoctor> {

    let dataUrl: string = `${this.serverUrl}/doctor/search-by-id/${id}`;
    return this.httpClient.get<InfoDoctor>(dataUrl).pipe(catchError(this.handleError));

    // return this.httpClient.get<InfoDoctor>(this.serverUrl+"/search?name="+name);
  }
  //Set value for doctor
  public SetDoctor(Dgroup: InfoDoctor): Observable<InfoDoctor> {
    let dataUrl: string = `${this.serverUrl}/doctor`;
    return this.httpClient.post<InfoDoctor>(dataUrl, Dgroup).pipe(catchError(this.handleError));
  }

  //Show Patient by id
  public showPatient(patient_id: number): Observable<InfoPatient> {
    let dataUrl: string = `${this.serverUrl}/patient/search/${patient_id}`;
    return this.httpClient.get<InfoPatient>(dataUrl).pipe(catchError(this.handleError));
  }

  //Set value for patient
  public SetPatient(Pgroup: InfoPatient): Observable<InfoPatient> {
    let dataUrl: string = `${this.serverUrl}/patient/add`;
    return this.httpClient.post<InfoPatient>(dataUrl, Pgroup).pipe(catchError(this.handleError));
  }



  //Delete doctor
  public deleteDoctor(id:number): Observable<InfoDoctor>{
    let dataUrl: string = `${this.serverUrl}/doctor/delete/${id}`;
    return this.httpClient.delete<InfoDoctor>(dataUrl).pipe(catchError(this.handleError));
  }

//DELETE patient
  public deletePatient(id:number): Observable<InfoPatient>{
    let dataUrl: string = `${this.serverUrl}/patient/delete/${id}`;
    return this.httpClient.delete<InfoPatient>(dataUrl).pipe(catchError(this.handleError));
  }


}
