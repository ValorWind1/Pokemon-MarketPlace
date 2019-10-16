package com.collabera.repository;

import java.math.BigInteger;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.collabera.model.Pokemon;

@Repository
public interface PokeDatabase extends MongoRepository<Pokemon,BigInteger>{

}
