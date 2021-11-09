package com.alvaro.libreria.controller;

import java.util.List;
import java.util.Optional;

import com.alvaro.libreria.entity.models.User;
import com.alvaro.libreria.entity.services.IUserService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class UserController {

	@Autowired
	IUserService userService;

	@GetMapping("/user")
	List<User> getAll(){
		return userService.getAll();
	}

	@GetMapping("/user/{id}")
	User getOne(@PathVariable("id") int id) {
		Optional<User> l = userService.getOne(id);

		if(l.isPresent()) {
			return l.get();
		};

		return null;
	}

	@PostMapping("/user")
	void add(User user) {
		System.out.println(user.getName());
		userService.add(user);
	}

	@PostMapping(value="/user", consumes="application/json")
	void addUsingJson(@RequestBody String userString) {
		ObjectMapper om = new ObjectMapper();
		try {
			User user = om.readValue(userString, User.class);
			userService.add(user);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@PutMapping(value = "/user/{id}")
    void update(@PathVariable(value = "id") int id, User user) {
		System.out.println(user.getName());
		userService.update(id, user);
    }

	@DeleteMapping("/user/{id}")
	void delete(@PathVariable("id") int id) {
		System.out.println(id);
		userService.delete(id);
	}
}
