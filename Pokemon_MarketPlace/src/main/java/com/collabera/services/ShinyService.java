package com.collabera.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

	public List<ShiniesDTO> getAll() {

		return Repo.findAll();
	}

	public ShiniesDTO findById(int id) {
		Optional<Shiny> shinyOP = Repo.findById(id);
		if (shinyOP.isPresent()) {
			return Map.toDTO(shinyOP.get());
		}
		return null;
	}

	public ShiniesDTO save(ShiniesDTO shiny) {
		Shiny entity = Map.toEntity(shiny);
		Shiny saved = Repo.insert(entity);
		return Map.toDTO(saved);
	}

	public ShiniesDTO update(ShiniesDTO shiny) {
		int id = shiny.getId();
		Optional<Shiny> findById = Repo.findById(id);
		if (findById.isPresent()) {
	-		Shiny updatedshiny = findById.get();
			// add update logic when models are made
			Shiny saved = Repo.save(updatedShiny);
			return Map.toDTO(saved);
		} else {
			throw new IllegalArgumentException();
		}
	}

	public void deleteById(int id) {
		Repo.deleteById(id);
	}

}
