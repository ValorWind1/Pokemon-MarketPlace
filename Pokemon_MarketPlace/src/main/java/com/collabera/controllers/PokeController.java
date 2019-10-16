package com.collabera.controllers;

import java.math.BigInteger;
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

import com.collabera.dto.PokemonDTO;
import com.collabera.services.PokeService;


@RestController
public class PokeController {

	private final PokeService service;

	public PokeController(PokeService service) {
		super();
		this.service = service;
	}

	@GetMapping("/api/pokemon")
	public List<PokemonDTO> getAll() {
		
		return service.getAll();
	}

	@GetMapping("/api/pokemon/{id}")
	public ResponseEntity<PokemonDTO> getByID(@PathVariable BigInteger id) {
		PokemonDTO hero = service.findById(id);

		return ResponseEntity.ok(hero);
	}

	@PostMapping("/api/pokemon")
	public ResponseEntity<PokemonDTO> post(@RequestBody @Valid PokemonDTO pokemon) throws URISyntaxException {

		PokemonDTO result = service.save(pokemon);
		return ResponseEntity.created(new URI("/api/pokemon/" + result.getId())).body(result);
	}

	@PutMapping("/api/pokemon")
	public ResponseEntity<PokemonDTO> update(@RequestBody @Valid PokemonDTO pokemon) {
		PokemonDTO result = service.update(pokemon);
		
		return ResponseEntity.ok().body(result);
	}

	@DeleteMapping("/api/pokemon/{id}")
	public ResponseEntity<Void> deleteByID(@PathVariable BigInteger id) {

		service.deleteById(id);
		return ResponseEntity.ok().build();
	}

}

