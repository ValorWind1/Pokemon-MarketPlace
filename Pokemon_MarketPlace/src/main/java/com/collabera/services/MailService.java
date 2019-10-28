package com.collabera.services;

import javax.mail.internet.MimeMessage;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.collabera.model.MailModel;


@Service
public class MailService {
	
    @Autowired
    private JavaMailSender sender;
	
 
    public void sendEmail(@Valid MailModel email) throws Exception {
        MimeMessage message = sender.createMimeMessage();
 
        
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
 
        helper.setTo(email.getEmailAddress());
        helper.setText("<html> <img src='cid:id101'/><body></html><body>Your order is on the way!", true);
        helper.setSubject("Thank you for your patronage!");
 
        ClassPathResource file = new ClassPathResource("r.jpeg");
        helper.addInline("id101", file);
 
        sender.send(message);
    }

}