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

import com.collabera.dto.ItemDTO;
import com.collabera.services.ItemService;


@RestController
public class ItemController {

	private final ItemService service;

	public ItemController(ItemService service) {
		super();
		this.service = service;
	}

	@GetMapping("/api/item")
	public List<ItemDTO> getAll() {
		
		return service.getAll();
	}

	@GetMapping("/api/item/{id}")
	public ResponseEntity<ItemDTO> getByID(@PathVariable BigInteger id) {
		ItemDTO hero = service.findById(id);

		return ResponseEntity.ok(hero);
	}

	@PostMapping("/api/item")
	public ResponseEntity<ItemDTO> post(@RequestBody @Valid ItemDTO item) throws URISyntaxException {

		ItemDTO result = service.save(item);
		return ResponseEntity.created(new URI("/api/item/" + result.getId())).body(result);
	}

	@PutMapping("/api/item")
	public ResponseEntity<ItemDTO> update(@RequestBody @Valid ItemDTO item) {
		ItemDTO result = service.update(item);
		
		return ResponseEntity.ok().body(result);
	}

	@DeleteMapping("/api/item/{id}")
	public ResponseEntity<Void> deleteByID(@PathVariable BigInteger id) {

		service.deleteById(id);
		return ResponseEntity.ok().build();
	}

}


