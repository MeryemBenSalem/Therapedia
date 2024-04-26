package com.ppp.Therapedia.Journals.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;



@Configuration
public class CorsConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("*") // or specify specific origins
                .allowedMethods("GET", "POST", "PUT", "DELETE") // or allow all methods
                .allowedHeaders("*"); // or specify specific headers
    }
}

