package com.alvaro.libreria.controller;

import java.util.List;
import java.util.Optional;

import com.alvaro.libreria.entity.models.Book;
import com.alvaro.libreria.entity.services.IBookService;

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
public class BookController{
	
	@Autowired
	IBookService bookService;

	@GetMapping("/book")
	List<Book> getAll(){
		return bookService.getAll();
	}

	@GetMapping("/book/{id}")
	Book getOne(@PathVariable("id") int id) {
		Optional<Book> l = bookService.getOne(id);

		if(l.isPresent()) {
			return l.get();
		};

		return null;
	}

	@PostMapping("/book")
	void add(Book book) {
		System.out.println(book.getName());
		bookService.add(book);
	}

	@PostMapping(value="/book", consumes="application/json")
	void addUsingJson(@RequestBody String bookString) {
		ObjectMapper om = new ObjectMapper();
		try {
			Book book = om.readValue(bookString, Book.class);
			bookService.add(book);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@PutMapping(value = "/book/{id}")
    void update(@PathVariable(value = "id") int id, Book book) {
		System.out.println(book.getName());
		bookService.update(id, book);
    }

	@DeleteMapping("/book/{id}")
	void delete(@PathVariable("id") int id) {
		System.out.println(id);
		bookService.delete(id);
	}

}
