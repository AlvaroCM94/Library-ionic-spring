package com.alvaro.libreria.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.alvaro.libreria.entity.models.Author;

public interface AuthorDAO extends CrudRepository<Author, Integer>{

}
