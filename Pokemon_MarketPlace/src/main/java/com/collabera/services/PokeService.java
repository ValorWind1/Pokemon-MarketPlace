package com.collabera.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.collabera.mha.dto.StudentDTO;
import com.collabera.mha.model.StudentModel;
import com.collabera.mongodbtest.model.Jojo;

public class PokeService {

	@Autowired
	private final PokeRepo Repo;
	private final PokemonMapper Map;
	
	public PokeService(PokeRepo repo, PokemonMapper map) {
		super();
		this.Repo = repo;
		Map = map;
	}

	public List<PokemonDTO> getAll() {
		
		return Repo.findAll();
	}
	
	public PokemonDTO findById(int id) {
		Optional<Pokemon> pokeOP = Repo.findById(id);
		if (pokeOP.isPresent()) {
			return Map.toDTO(pokeOP.get());
		}
		return null;
	}

	public PokemonDTO save(PokemonDTO poke) {
		Pokemon entity = Map.toEntity(poke);
		Pokemon saved = Repo.insert(entity);
		return Map.toDTO(saved);
	}

	public PokemonDTO update(PokemonDTO poke) {
		int id = poke.getId();
		Optional<Pokemon> findById = Repo.findById(id);
		if (findById.isPresent()) {
			Pokemon uHero = findById.get();
			uHero.setName(poke.getName());
			uHero.setHeroName(poke.getHeroName());
			uHero.setQuirk(poke.getQuirk());
			Pokemon saved = Repo.save(uHero);
			return Map.toDTO(saved);
		} else { 
			throw new IllegalArgumentException();
		}
	}

	public void deleteById(int id) {
		Repo.deleteById(id);
	}
	
	
	
}
