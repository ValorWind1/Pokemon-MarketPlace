package com.collabera.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.collabera.mongodbtest.model.Jojo;

public class PokeService {

	@Autowired
	private final PokeRepo repo;

	public PokeService(PokeRepo repo) {
		super();
		this.repo = repo;
	}
	
	List<PokemonDTO> getAll() {
		
		return repo.findAll();
	}
	
	
	
	
	
}
