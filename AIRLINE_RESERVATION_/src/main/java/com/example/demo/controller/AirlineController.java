package com.example.demo.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.exception.ResourceNotFoundException;
import com.example.demo.model.Airline;
import com.example.demo.repository.AirlineRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class AirlineController {

	@Autowired
	private AirlineRepository airlineRepository;
	

	@GetMapping("/reserve")
	public List<Airline> getAllEmployees(){
		return airlineRepository.findAll();
	}		
	
	
	@PostMapping("/reserve")
	public Airline createAirline(@RequestBody Airline airline) {
		return airlineRepository.save(airline);
	}
	

	@GetMapping("/reserve/{id}")
	public ResponseEntity<Airline> getEmployeeById(@PathVariable int id) {
		Airline airline = airlineRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Passenger not exist with id :" + id));
		return ResponseEntity.ok(airline);
	}
	
	// update employee rest api
	
	@PutMapping("/reserve/{id}")
	public ResponseEntity<Airline> updateEmployee(@PathVariable int id, @RequestBody Airline airlineDetails){
		Airline airline = airlineRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
		
		airline.setDeparture(airlineDetails.getDeparture());
		airline.setDestination(airlineDetails.getDestination());
		airline.setDepartingTime(airlineDetails.getDepartingTime());
		airline.setReturningTime(airlineDetails.getReturningTime());
		airline.setAdults(airlineDetails.getAdults());
		airline.setChildren(airlineDetails.getChildren());
		airline.setTravelClass(airlineDetails.getTravelClass());
		
		
		Airline updatedAirline = airlineRepository.save(airline);
		return ResponseEntity.ok(updatedAirline);
	}
	
	
	@DeleteMapping("/reserve/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable int id){
		Airline airline = airlineRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Passenger not exist with id :" + id));
		
		airlineRepository.delete(airline);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}