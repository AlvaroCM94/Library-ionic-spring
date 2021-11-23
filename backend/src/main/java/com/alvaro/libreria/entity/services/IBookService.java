package com.alvaro.libreria.entity.services;

import java.util.List;
import java.util.Optional;

import com.alvaro.libreria.entity.models.Book;

public interface IBookService {
	Optional<Book> getOne(int id);
	List<Book> getAll();
	void add(Book libro);
	void update(int id, Book libro);
	void delete(int id);
	Book findByName(String name);
}
