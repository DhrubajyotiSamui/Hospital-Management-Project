package com.mindtree.dhruba.doctor.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.mindtree.dhruba.doctor.entity.Doctor;
import com.mindtree.dhruba.doctor.exception.CustomException;
import com.mindtree.dhruba.doctor.valueObject.DoctorWithPatient;

@Service
public interface DoctorService {

	Doctor add(Doctor doc);
	List<Doctor> list();
	DoctorWithPatient getById(long id) throws CustomException;
	Doctor update(Doctor doc,long id) throws CustomException;
	Doctor delete(long id) throws CustomException;
	List<Doctor> getByName(String name);
	String getName(long id);
}

