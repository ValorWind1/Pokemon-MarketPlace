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

import com.collabera.services.ShinyService;

@RestController
public class ShinyController {

	private final ShinyService service;

	public ShinyController(ShinyService service) {
		super();
		this.service = service;
	}

	@GetMapping("/api/Shiny")
	public List<ShiniesDTO> getAll() {
		
		return service.findAll();
	}

	@GetMapping("/api/Shiny/{id}")
	public ResponseEntity<ShiniesDTO> getByID(@PathVariable int id) {
		ShiniesDTO hero = service.findById(id);

		return ResponseEntity.ok(hero);
	}

	@PostMapping("/api/Shiny")
	public ResponseEntity<ShiniesDTO> post(@RequestBody @Valid ShiniesDTO shiny) throws URISyntaxException {

		ShiniesDTO result = service.save(shiny);
		return ResponseEntity.created(new URI("/api/Shiny/" + result.getId())).body(result);
	}

	@PutMapping("/api/Shiny")
	public ResponseEntity<ShiniesDTO> update(@RequestBody @Valid ShiniesDTO shiny) {
		ShiniesDTO result = service.update(shiny);
		
		return ResponseEntity.ok().body(result);
	}

	@DeleteMapping("/api/Shiny/{id}")
	public ResponseEntity<Void> deleteByID(@PathVariable int id) {

		service.deleteById(id);
		return ResponseEntity.ok().build();
	}

}


