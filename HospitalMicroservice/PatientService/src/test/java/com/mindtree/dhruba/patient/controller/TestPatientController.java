package com.mindtree.dhruba.patient.controller;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.mindtree.dhruba.patient.controller.PatientController;
import com.mindtree.dhruba.patient.entity.Patient;
import com.mindtree.dhruba.patient.repository.PatientRepository;

@SpringBootTest
public class TestPatientController {

	@Autowired
    PatientController pControl;
     
    @Autowired
    PatientRepository pRepo;
    
    @Test
    void testList()
    {
    	assertThat(pControl.listPatient().size()).isGreaterThan(0);
    }
    
    @Test
    void testAdd()
    {
    	Patient p1=null;
		try {
			p1 = new Patient(4L,"Soumitra Roy",34,3L,new SimpleDateFormat("yyyy-MM-dd").parse("2022-08-20"),"CT SYXSXkHA");
		} catch (ParseException e) {
			e.printStackTrace();
		}
    	pControl.add(p1);
    	
    	assertEquals("Soumitra Roy",pRepo.byName("Soumitra Roy").getName());
    }
    
  
    @Test
    void testListPatient()
    {
    	assertThat(pControl.listPatient().size()).isGreaterThan(0);
    }
    
    void testNumberOfPatientOfDoctor()
    {
    	assertThat(pControl.numberOfPatientInDoctor(3L)).isGreaterThan(0);
    }
}
