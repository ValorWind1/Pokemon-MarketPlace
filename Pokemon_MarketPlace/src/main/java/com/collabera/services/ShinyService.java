package com.collabera.services;

import java.math.BigInteger;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.collabera.dto.ShinyDTO;
import com.collabera.mappers.ShinyMapper;
import com.collabera.model.ShinyPokemon;
import com.collabera.repository.ShinyPokeDatabase;

@Service
@Transactional
public class ShinyService {

	@Autowired
	private final ShinyPokeDatabase Repo;
	private final ShinyMapper Map;

	public ShinyService(ShinyPokeDatabase repo, ShinyMapper map) {
		super();
		this.Repo = repo;
		Map = map;
	}

	public List<ShinyDTO> getAll() {

		return Repo.findAll().stream().map(m -> Map.toDTO(m)).collect(Collectors.toList());
	}

	public ShinyDTO findById(BigInteger id) {
		Optional<ShinyPokemon> shinyOP = Repo.findById(id);
		if (shinyOP.isPresent()) {
			return Map.toDTO(shinyOP.get());
		}
		return null;
	}

	public ShinyDTO save(ShinyDTO shiny) {
		ShinyPokemon entity = Map.toEntity(shiny);
		ShinyPokemon saved = Repo.insert(entity);
		return Map.toDTO(saved);
	}

	public ShinyDTO update(ShinyDTO shiny) {
		BigInteger id = shiny.getId();
		Optional<ShinyPokemon> findById = Repo.findById(id);
		if (findById.isPresent()) {
			ShinyPokemon updatedShiny = findById.get();
			// add update logic when models are made
			ShinyPokemon saved = Repo.save(updatedShiny);
			return Map.toDTO(saved);
		} else {
			throw new IllegalArgumentException();
		}
	}

	public void deleteById(BigInteger id) {
		Repo.deleteById(id);
	}

}
