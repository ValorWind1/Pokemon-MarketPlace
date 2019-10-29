package com.collabera.model;

import java.util.Arrays;

public class MailModel {
	
	String emailAddress;
	public Pokemon[] poke;
	public Item[] item;
	public int total;
	
	public String getEmailAddress() {
		return emailAddress;
	}
	public void setEmailAddress(String emailAddress) {
		this.emailAddress = emailAddress;
	}
	public Pokemon[] getPoke() {
		return poke;
	}
	public void setPoke(Pokemon[] poke) {
		this.poke = poke;
	}
	public Item[] getItem() {
		return item;
	}
	public void setItem(Item[] item) {
		this.item = item;
	}

	
}
