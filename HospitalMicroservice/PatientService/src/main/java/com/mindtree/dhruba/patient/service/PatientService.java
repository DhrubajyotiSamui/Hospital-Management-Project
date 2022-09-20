package com.mindtree.dhruba.patient.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mindtree.dhruba.patient.entity.Patient;
import com.mindtree.dhruba.patient.exception.CustomException;
import com.mindtree.dhruba.patient.valueObject.PatientWithDoctor;

@Service
public interface PatientService {

	Patient add(Patient patient);
	PatientWithDoctor searchById(long id) throws CustomException;
	List<PatientWithDoctor> listWithDoctor();
	int numberOfPatientInDoctor(long docId);
	void deleteById(long id);
}
