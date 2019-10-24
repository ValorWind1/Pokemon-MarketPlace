package com.collabera.ugotmail;

import java.net.URI;
import java.net.URISyntaxException;

import javax.mail.internet.MimeMessage;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.collabera.dto.ItemDTO;
import com.collabera.services.ItemService;
import com.collabera.services.MailService;
 
@RestController
public class SimpleEmailController {
	
	private final MailService service;
	
	public SimpleEmailController(MailService service) {
		super();
		this.service = service;
	}

 
    @PostMapping("/api/sm")
	public String post(@RequestBody @Valid String email){
    	try {
    		service.sendEmail(email);
    		System.out.println("sent mail");
            return "Email Sent!";
        } catch (Exception ex) {
            return "Error in sending email: " + ex;
        }
    }
}
    
