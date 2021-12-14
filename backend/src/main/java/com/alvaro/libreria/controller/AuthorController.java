package com.alvaro.libreria.controller;

import java.util.List;
import java.util.Optional;

import com.alvaro.libreria.entity.models.Author;
import com.alvaro.libreria.entity.services.IAuthorService;

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
public class AuthorController{
	
	@Autowired
	IAuthorService authorService;

	@GetMapping("/author")
	List<Author> getAll(){
		return authorService.getAll();
	}

	@GetMapping("/author/{id}")
	Author getOne(@PathVariable("id") int id) {
		Optional<Author> l = authorService.getOne(id);

		if(l.isPresent()) {
			return l.get();
		};

		return null;
	}

	@PostMapping("/author")
	void add(Author author) {
		System.out.println("algo de mi vida");
		System.out.println(author);
		System.out.println(author.getName());
		authorService.add(author);
	}

	@PostMapping(value="/author", consumes="application/json")
	void addUsingJson(@RequestBody String autorString) {
		ObjectMapper om = new ObjectMapper();
		try {
			Author autor = om.readValue(autorString, Author.class);
			authorService.add(autor);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@PutMapping(value = "/author/{id}")
    void update(@PathVariable(value = "id") int id, Author author) {
		System.out.println("id hola: " + id);
		System.out.println("nombre: " + author.getName());
		authorService.update(id, author);
    }

	@DeleteMapping("/author/{id}")
	void delete(@PathVariable("id") int id) {
		System.out.println(id);
		authorService.delete(id);
	}

}
