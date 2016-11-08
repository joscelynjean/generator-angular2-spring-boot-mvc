package com.dummy.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/greeting")
public class HelloController {

	@GetMapping
	public String getGreeting() {

		return "Hello, angular2-spring-boot-mvc";
	}

}
