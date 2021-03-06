package com.collabera.model;

import java.math.BigInteger;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection="pokemons")
public class Pokemon {
	
	@Id
	private BigInteger id;
	@Field("national_number")
	private String nationalNum;
	private String name;
	private String[] type;
	@Field("sprites")
	private Sprite sprite;
	private Integer total;
	private Integer hp;
	private Integer attack;
	private Integer defense;
	private Integer speed;
	private int price;
	
	public Pokemon() {
		
	}
	
	public Pokemon(BigInteger id, String nationalNum, String name, String[] type, Sprite sprite, 
			Integer total, Integer hp, Integer attack, Integer defense, Integer speed) {
		super();
		this.id = id;
		this.nationalNum = nationalNum;
		this.name = name;
		this.type = type;
		this.sprite = sprite;
		this.total = total;
		this.hp = hp;
		this.attack = attack;
		this.defense = defense;
		this.speed = speed;
	}

	public BigInteger getId() {
		return id;
	}

	public void setId(BigInteger id) {
		this.id = id;
	}

	public String getNationalNum() {
		return nationalNum;
	}

	public void setNationalNum(String nationalNum) {
		this.nationalNum = nationalNum;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String[] getType() {
		return type;
	}

	public void setType(String[] type) {
		this.type = type;
	}

	public Sprite getSprite() {
		return sprite;
	}

	public void setSprite(Sprite sprite) {
		this.sprite = sprite;
	}

	public Integer getTotal() {
		return total;
	}

	public void setTotal(Integer total) {
		this.total = total;
	}

	public Integer getHp() {
		return hp;
	}

	public void setHp(Integer hp) {
		this.hp = hp;
	}

	public Integer getAttack() {
		return attack;
	}

	public void setAttack(Integer attack) {
		this.attack = attack;
	}

	public Integer getDefense() {
		return defense;
	}

	public void setDefense(Integer defense) {
		this.defense = defense;
	}

	public Integer getSpeed() {
		return speed;
	}

	public void setSpeed(Integer speed) {
		this.speed = speed;
	}

	public int getPrice() {
		return price;
	}
}
