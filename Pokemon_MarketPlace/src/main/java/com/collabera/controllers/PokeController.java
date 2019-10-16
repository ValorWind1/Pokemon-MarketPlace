package com.collabera.controllers;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.collabera.services.PokeService;


@RestController
public class PokeController {

	private final PokeService service;

	public PokeController(PokeService service) {
		super();
		this.service = service;
	}

	@GetMapping("/api/Pokemon")
	public List<PokemonDTO> getAll() {
		
		return service.findAll();
	}

	@GetMapping("/api/Pokemon/{id}")
	public ResponseEntity<PokemonDTO> getByID(@PathVariable int id) {
		PokemonDTO hero = service.findById(id);

		return ResponseEntity.ok(hero);
	}

	@PostMapping("/api/Pokemon")
	public ResponseEntity<PokemonDTO> post(@RequestBody @Valid PokemonDTO pokemon) throws URISyntaxException {

		PokemonDTO result = service.save(pokemon);
		return ResponseEntity.created(new URI("/api/Pokemon/" + result.getId())).body(result);
	}

	@PutMapping("/api/Pokemon")
	public ResponseEntity<PokemonDTO> update(@RequestBody @Valid PokemonDTO pokemon) {
		PokemonDTO result = service.update(pokemon);
		
		return ResponseEntity.ok().body(result);
	}

	@DeleteMapping("/api/Pokemon/{id}")
	public ResponseEntity<Void> deleteByID(@PathVariable int id) {

		service.deleteById(id);
		return ResponseEntity.ok().build();
	}

}

