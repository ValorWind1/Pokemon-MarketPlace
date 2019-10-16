package com.collabera.mapper;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Component;

import com.collabera.dto.ItemDTO;
import com.collabera.dto.PokemonDTO;
import com.collabera.dto.ShiniesDTO;

@Component
public class PokemonMapper {
	
	public Pokemon toEntity(PokemonDTO dto) {
		Pokemon pokemon = new Pokemon();
		
		pokemon.setName(dto.ItemDTO());
		pokemon.setCategory(dto.PokemonDTO());
		pokemon.setName(dto.ShiniesDTO());
		return pokemon ; 

}

	public PokemonDTO toDto(Pokemon entity) {
		PokemonDTO pokemon = new PokemonDTO();
		pokemon.setMovieId(entity.getId());
		pokemon.setName(entity.getName());
		pokemon.setCategory(entity.getCategory());	
		return pokemon;
	}
}