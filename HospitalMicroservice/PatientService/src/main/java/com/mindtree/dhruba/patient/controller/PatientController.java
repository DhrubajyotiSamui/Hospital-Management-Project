package com.mindtree.dhruba.patient.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.dhruba.patient.entity.Patient;
import com.mindtree.dhruba.patient.exception.CustomException;
import com.mindtree.dhruba.patient.service.PatientService;
import com.mindtree.dhruba.patient.valueObject.PatientWithDoctor;

@RestController
@RequestMapping("/patient")
public class PatientController {

	@Autowired
	PatientService pServe;

	
	// this is for adding patient in database
	@PostMapping("/add")
	public Patient add(@RequestBody Patient patient) {
		return pServe.add(patient);
	}
	
	
	// for deleting patient in the data base
	@DeleteMapping("/delete/{id}")
	public void delete(@PathVariable long id) throws CustomException
	{
		 pServe.deleteById(id);
	}
	
	
	
	// it will return a patient by id with visited doctor name in the search patient page
	@GetMapping("/search/{id}")
	public PatientWithDoctor searchById(@PathVariable long id) throws CustomException
	{
		try {
			return pServe.searchById(id);
		} catch (CustomException e) {
			throw new CustomException(e.getMessage());
		}
	}
	
	
	@GetMapping("/with-doctor")
	public List<PatientWithDoctor> listPatient()
	{
		return pServe.listWithDoctor();
	}
	
	
	// this will return number of patient attended by a doctor to doctor microservice
	@GetMapping("/patient-of-doctor/{docId}")
	public int numberOfPatientInDoctor(@PathVariable long docId)
	{
		return pServe.numberOfPatientInDoctor(docId);
	}
	
	
	
}
