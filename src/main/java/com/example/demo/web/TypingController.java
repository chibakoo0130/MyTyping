package com.example.demo.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class TypingController {

	@RequestMapping("/menu")
	public String menu() {
		return "/menu";
	}

	@PostMapping("/start")
	public String start() {
		return "/start";
	}
}
