package com.collabera.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ItemService {
	
	@Autowired
	private final ItemDatabase Repo;
	private final ItemMapper Map;

	public ItemService(ItemDatabase repo, ItemMapper map) {
		super();
		this.Repo = repo;
		Map = map;
	}

	public List<ItemDTO> getAll() {

		return Repo.findAll();
	}

	public ItemDTO findById(int id) {
		Optional<Item> ItemOP = Repo.findById(id);
		if (ItemOP.isPresent()) {
			return Map.toDTO(ItemOP.get());
		}
		return null;
	}

	public ItemDTO save(ItemDTO Item) {
		Item entity = Map.toEntity(Item);
		Item saved = Repo.insert(entity);
		return Map.toDTO(saved);
	}

	public ItemDTO update(ItemDTO Item) {
		int id = Item.getId();
		Optional<Item> findById = Repo.findById(id);
		if (findById.isPresent()) {
	-		Item updatedItem = findById.get();
			// add update logic when models are made
			Item saved = Repo.save(updatedItem);
			return Map.toDTO(saved);
		} else {
			throw new IllegalArgumentException();
		}
	}

	public void deleteById(int id) {
		Repo.deleteById(id);
	}

}
