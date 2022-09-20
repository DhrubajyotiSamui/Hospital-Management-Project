package com.mindtree.dhruba.doctor.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mindtree.dhruba.doctor.entity.Doctor;
import com.mindtree.dhruba.doctor.exception.CustomException;
import com.mindtree.dhruba.doctor.service.DoctorService;
import com.mindtree.dhruba.doctor.valueObject.DoctorWithPatient;

@RestController
@RequestMapping("/doctor")
public class DoctorController {

	@Autowired
	DoctorService docService;
	
	// add doctor in the data base
	@PostMapping
	public Doctor add(@RequestBody Doctor doc)
	{
		return docService.add(doc);
	}
	
	
	//this is for getting list of doctor in the create patient page
	@GetMapping
	public List<Doctor> list() throws CustomException
	{
		if(docService.list().isEmpty())
		{
			throw new CustomException("No doctor there in the database");
		}
		return docService.list();
		
	}
	
	
	//deleting doctor
	@DeleteMapping("/delete/{id}")
	public Doctor delete(@PathVariable long id) throws CustomException
	{
		return docService.delete(id);
	}
	
	
	//updating doctor not in used 
	@PutMapping("/update/{id}")
	public Doctor update(@RequestBody Doctor doc,@PathVariable long id) throws CustomException
	{
		return docService.update(doc, id);
	}
	
	
	
	//this is for getting corresponding  doctor in the search doctor page return with patient count
	@GetMapping("/search-by-id/{id}")
	public DoctorWithPatient getByID(@PathVariable long id) throws CustomException
	{
		try
		{
			return docService.getById(id);
		}
		catch(Exception e)
		{
			throw new CustomException(e.getMessage());
		}
	}
	
	
	// getting doctor list in the search doctor page
	@GetMapping("/search")
	public List<Doctor> getByName(@RequestParam String name)
	{
		return docService.getByName(name);
	}
	
	
	
	
   
	// this is for getting the name of the doctor from patient microservice
	@GetMapping("/get-name/{id}")
	public String getName(@PathVariable long id)
	{
		return docService.getName(id);
	}
	
}
