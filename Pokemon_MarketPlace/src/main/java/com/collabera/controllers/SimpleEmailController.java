package com.collabera.controllers;

import javax.validation.Valid;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.collabera.model.MailModel;
import com.collabera.services.MailService;
 
@RestController
public class SimpleEmailController {
	
	private final MailService service;
	
	public SimpleEmailController(MailService service) {
		super();
		this.service = service;
	}

 
    @PostMapping("/api/sm")
	public String post(@RequestBody @Valid MailModel email){
    	
    	try {
    		service.sendEmail(email);
    		System.out.println("sent mail");
            return "Email Sent!";
        } catch (Exception ex) {
            return "Error in sending email: " + ex;
        }
    }
}
    
