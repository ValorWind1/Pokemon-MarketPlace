package com.collabera.ugotmail;

import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
 
@Controller
public class SimpleEmailController {
 
    @Autowired
    private JavaMailSender sender;
 
    @RequestMapping("/sm")
    @ResponseBody
    String home() {
        try {
            sendEmail();
            return "Email Sent!";
        } catch (Exception ex) {
            return "Error in sending email: " + ex;
        }
    }
 
    private void sendEmail() throws Exception {
        MimeMessage message = sender.createMimeMessage();
 
        
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
 
        helper.setTo("darth7dan@gmail.com");
        helper.setText("<html> <img src='cid:id101'/><body></html><body>Here is our calling card!", true);
        helper.setSubject("Thank you, for your patronage !");
 
        ClassPathResource file = new ClassPathResource("r.jpeg");
        helper.addInline("id101", file);
 
        sender.send(message);
    }
}