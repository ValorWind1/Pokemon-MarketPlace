

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class CorsConfiguration implements WebMvcConfigurer{
	
	@Override
	public void addCorsMappings(CorsRegistry registry) {
		// TODO Auto-generated method stub
		WebMvcConfigurer.super.addCorsMappings(registry);
		System.out.println("This is the configuration");
		registry.addMapping("/**")
		.allowedOrigins("*")
		.allowedMethods("GET","POST", "PUT", "DELETE","OPTIONS", "PATCH");
		
	}

}

