package com.collabera.model;

import java.util.Arrays;

public class MailModel {
	
	String emailAddress;
	Pokemon[] poke;
	Item[] item;
	
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
	
	@Override
	public String toString() {
		return "MailModel [emailAddress=" + emailAddress + ", poke=" + Arrays.toString(poke) + ", item="
				+ Arrays.toString(item) + "]";
	}

	
}
