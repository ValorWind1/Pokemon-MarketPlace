package com.collabera.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class PokeService {

	@Autowired
	private final PokeDatabase Repo;
	private final PokemonMapper Map;
	
	public PokeService(PokeDatabase repo, PokemonMapper map) {
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
			Pokemon updatedPoke = findById.get();
			//add update logic when models are made
			Pokemon saved = Repo.save(updatedPoke);
			return Map.toDTO(saved);
		} else { 
			throw new IllegalArgumentException();
		}
	}

	public void deleteById(int id) {
		Repo.deleteById(id);
	}
	
}
