package com.collabera.model;

public class Sprite {
	 
	private String normal;
	 private String large;
	 private String animated;
	 
	public Sprite() {
		
	}
	 
	public Sprite(String normal, String large, String animated) {
		super();
		this.normal = normal;
		this.large = large;
		this.animated = animated;
	}
	public String getNormal() {
		return normal;
	}
	public void setNormal(String normal) {
		this.normal = normal;
	}
	public String getLarge() {
		return large;
	}
	public void setLarge(String large) {
		this.large = large;
	}
	public String getAnimated() {
		return animated;
	}
	public void setAnimated(String animated) {
		this.animated = animated;
	}	
}
