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

import com.collabera.dto.ShinyDTO;
import com.collabera.services.ShinyService;

@RestController
public class ShinyController {

	private final ShinyService service;

	public ShinyController(ShinyService service) {
		super();
		this.service = service;
	}

	@GetMapping("/api/shiny")
	public List<ShinyDTO> getAll() {
		
		return service.getAll();
	}

	@GetMapping("/api/shiny/{id}")
	public ResponseEntity<ShinyDTO> getByID(@PathVariable BigInteger id) {
		ShinyDTO hero = service.findById(id);

		return ResponseEntity.ok(hero);
	}

	@PostMapping("/api/shiny")
	public ResponseEntity<ShinyDTO> post(@RequestBody @Valid ShinyDTO shiny) throws URISyntaxException {

		ShinyDTO result = service.save(shiny);
		return ResponseEntity.created(new URI("/api/shiny/" + result.getId())).body(result);
	}

	@PutMapping("/api/shiny")
	public ResponseEntity<ShinyDTO> update(@RequestBody @Valid ShinyDTO shiny) {
		ShinyDTO result = service.update(shiny);
		
		return ResponseEntity.ok().body(result);
	}

	@DeleteMapping("/api/shiny/{id}")
	public ResponseEntity<Void> deleteByID(@PathVariable BigInteger id) {

		service.deleteById(id);
		return ResponseEntity.ok().build();
	}

}


