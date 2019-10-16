package com.collabera.dto;

public class PokemonDTO {
	
	private Integer id; 
	private String national_number; 
	private Sprites sprites; 
	private String name;
	private String type;
	
	private Integer total; 
	private Integer hp ; 
	private Integer attack; 
	private Integer defense;
	private Integer sp_atk;
	private Integer sp_def;
	private Integer speed;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNational_number() {
		return national_number;
	}
	public void setNational_number(String national_number) {
		this.national_number = national_number;
	}
	public Sprites getSprites() {
		return sprites;
	}
	public void setSprites(Sprites sprites) {
		this.sprites = sprites;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
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
	public Integer getSp_atk() {
		return sp_atk;
	}
	public void setSp_atk(Integer sp_atk) {
		this.sp_atk = sp_atk;
	}
	public Integer getSp_def() {
		return sp_def;
	}
	public void setSp_def(Integer sp_def) {
		this.sp_def = sp_def;
	}
	public Integer getSpeed() {
		return speed;
	}
	public void setSpeed(Integer speed) {
		this.speed = speed;
	}
	
	
	
	
	
	
	

}
