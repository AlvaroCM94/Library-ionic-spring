package com.alvaro.libreria.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.alvaro.libreria.entity.models.Book;

public interface BookDAO extends CrudRepository<Book, Integer>{

}
