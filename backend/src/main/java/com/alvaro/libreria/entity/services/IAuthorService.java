package com.alvaro.libreria.entity.services;

import java.util.List;
import java.util.Optional;

import com.alvaro.libreria.entity.models.Author;

public interface IAuthorService {
	Optional<Author> getOne(int id);
	List<Author> getAll();
	void add(Author autor);
	void update(int id, Author author);
	void delete(int id);
	
}
