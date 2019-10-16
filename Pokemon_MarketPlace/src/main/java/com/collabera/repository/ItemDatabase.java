package com.collabera.repository;

import java.math.BigInteger;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.collabera.model.Item;

@Repository
public interface ItemDatabase extends MongoRepository<Item, BigInteger>{

}
