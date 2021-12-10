package com.alvaro.libreria.controller;

import java.util.List;
import java.util.Optional;
//import java.util.Date;
//import java.util.stream.Collectors;

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
//import org.springframework.web.bind.annotation.RequestParam;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import javassist.NotFoundException;
 
//import io.jsonwebtoken.Jwts;
//import io.jsonwebtoken.SignatureAlgorithm;

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
		Optional<User> u = userService.getOne(id);

		if(u.isPresent()) {
			return u.get();
		};

		return null;
	}
	
	//@GetMapping({"/book/byemail/{email}" , "/book/bypassword/{password}"})
	@GetMapping("/user/byemail/{email}")
	
	User findByEmail(@PathVariable("email") String email) throws NotFoundException {
		System.out.println(email);
		User u = userService.findByEmail(email);

		return u;
	}
	
	@GetMapping("/user/bypassword/{password}")
	User findByPassword(@PathVariable("password") String password) throws NotFoundException {
		User u = userService.findByPassword(password);

		return u;
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
	
	/*private String getJWTToken(String name) {
		String secretKey = "mySecretKey";
		List<GrantedAuthority> grantedAuthorities = AuthorityUtils
				.commaSeparatedStringToAuthorityList("ROLE_USER");
		
		String token = Jwts
				.builder()
				.setId("softtekJWT")
				.setSubject(name)
				.claim("authorities",
						grantedAuthorities.stream()
								.map(GrantedAuthority::getAuthority)
								.collect(Collectors.toList()))
				.setIssuedAt(new Date(System.currentTimeMillis()))
				.setExpiration(new Date(System.currentTimeMillis() + 600000))
				.signWith(SignatureAlgorithm.HS512,
						secretKey.getBytes()).compact();

		return "Bearer " + token;
	}*/
	
	
}
