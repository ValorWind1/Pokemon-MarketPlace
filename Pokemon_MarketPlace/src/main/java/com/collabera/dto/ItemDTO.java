package com.collabera.dto;

public class ItemDTO {
	 
	private String name ; 
	
	private Integer price ; 
	
	private String drescription; 
	
	private String image ;

	
	
	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public String getDrescription() {
		return drescription;
	}

	public void setDrescription(String drescription) {
		this.drescription = drescription;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "ItemDTO [name=" + name + ", price=" + price + ", drescription=" + drescription + ", image=" + image
				+ "]";
	} 
	
	
	
}
