package com.dairy.main;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages = "com.dairy")
public class DairyApplication {

    public static void main(String[] args) {
        SpringApplication.run(DairyApplication.class, args);
    }
}
