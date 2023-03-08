package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="airline")

public class Airline {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private int id;
	private String Departure;
	private String Destination;
	private String DepartingTime;
	private String ReturningTime;
	private int Adults;
	private int children;
	private String TravelClass;
	public Airline(int id, String departure, String destination, String departingTime, String returningTime, int adults,
			int children, String travelClass) {
		super();
		this.id = id;
		this.Departure = departure;
		this.Destination = destination;
		this.DepartingTime = departingTime;
		this.ReturningTime = returningTime;
		this.Adults = adults;
		this.children = children;
		TravelClass = travelClass;
	}
	public Airline() {
		super();
		// TODO Auto-generated constructor stub
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getDeparture() {
		return Departure;
	}
	public void setDeparture(String departure) {
		Departure = departure;
	}
	public String getDestination() {
		return Destination;
	}
	public void setDestination(String destination) {
		Destination = destination;
	}
	public String getDepartingTime() {
		return DepartingTime;
	}
	public void setDepartingTime(String departingTime) {
		DepartingTime = departingTime;
	}
	public String getReturningTime() {
		return ReturningTime;
	}
	public void setReturningTime(String returningTime) {
		ReturningTime = returningTime;
	}
	public int getAdults() {
		return Adults;
	}
	public void setAdults(int adults) {
		Adults = adults;
	}
	public int getChildren() {
		return children;
	}
	public void setChildren(int children) {
		this.children = children;
	}
	public String getTravelClass() {
		return TravelClass;
	}
	public void setTravelClass(String travelClass) {
		TravelClass = travelClass;
	}
	
	
	
}
