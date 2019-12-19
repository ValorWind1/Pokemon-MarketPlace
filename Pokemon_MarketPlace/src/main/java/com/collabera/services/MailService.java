package com.collabera.services;

import java.text.NumberFormat;

import javax.mail.internet.MimeMessage;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import com.collabera.model.MailModel;
import com.collabera.model.Sprite;


@Service
public class MailService {
	
    @Autowired
    private JavaMailSender sender;
    
    private String pokeRow = "";
    private String itemRow = "";
	private Sprite img;
	
	NumberFormat price = NumberFormat.getCurrencyInstance();
 
    public void sendEmail(@Valid MailModel email) throws Exception {
        MimeMessage message = sender.createMimeMessage();
 
        
        MimeMessageHelper helper = new MimeMessageHelper(message, true);
        
        
		for (int i = 0; i < email.poke.length; i++) {
        	
			img = email.poke[i].getSprite();
			pokeRow = pokeRow + "<tr> <td>" + price.format(email.poke[i].getPrice()) + "</td>";
        	pokeRow = pokeRow + "<td> <img src='" + img.getAnimated() + "'/> </td> ";
        	pokeRow = pokeRow + "<td>" + email.poke[i].getName() + "</td></tr>"; 
        	
        	
        		
		}
		

		for (int i = 0; i < email.item.length; i++) {
			
			itemRow = itemRow + "<tr> <td>" + price.format(email.item[i].getPrice()) + "</td>";
        	itemRow = itemRow + "<td> <img src='" + email.item[i].getImage() + "'/> </td>";
			itemRow = itemRow + "<td>" + email.item[i].getName() + "</td> </tr>"; 
		}

		
        helper.setTo(email.getEmailAddress());        
        helper.setSubject("Thank you for your patronage!");   
        helper.setText("<html>" + 
        		"<div style=\"text-align: center\" class=\"container-fluid text-center\">" + 
        		"  <table class=\"table table-bordered\">" + 
        		"    <thead class=\"thead-dark\">" + 
        		"      <tr class=\"text-center\">" + 
        		"        <th scope=\"col\">Price</th>" +
        		"        <th scope=\"col\">Image</th>" + 
        		"        <th scope=\"col\">Name</th>" + 
        		"      </tr>" + 
        		"    </thead>" + 
        		"    <tbody>" + 
        		pokeRow + itemRow +
        		" </tbody> </table>" + 
        		"  </div> <p> Total: " + price.format(email.total) + 
        		"</p> </html> Your order is on the way!", true);

        pokeRow = "";
        itemRow = "";
        sender.send(message);
    }

}
