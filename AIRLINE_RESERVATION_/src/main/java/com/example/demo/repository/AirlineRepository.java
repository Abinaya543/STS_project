package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Airline;

public interface AirlineRepository  extends JpaRepository<Airline,Integer>{

}
