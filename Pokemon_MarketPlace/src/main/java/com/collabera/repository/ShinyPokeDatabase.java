package com.collabera.repository;

import java.math.BigInteger;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.collabera.model.ShinyPokemon;

@Repository
public interface ShinyPokeDatabase extends MongoRepository<ShinyPokemon, BigInteger>{

}
