package com.mindtree.dhruba.doctor.controller;

import static org.assertj.core.api.Assertions.assertThat;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.mindtree.dhruba.doctor.controller.DoctorController;
import com.mindtree.dhruba.doctor.entity.Doctor;
import com.mindtree.dhruba.doctor.exception.CustomException;

@SpringBootTest
public class TestDoctorController {

	@Autowired
	DoctorController dControl;

	@Autowired
	DoctorController dRepo;

	@Test
	void testList() throws CustomException {
		assertThat(dControl.list().size()).isGreaterThan(0);
	}

	void testAdd() {
		Doctor p1 = null;
		try {
			p1 = new Doctor(4L, "Karan Gokhle", 34, "Male", "Cardiology");
		} catch (Exception e) {
			e.printStackTrace();
		}

		dControl.add(p1);

	}

	@Test
	void testListPatient() throws CustomException {
		assertThat(dControl.list().size()).isGreaterThan(0);
	}

}
