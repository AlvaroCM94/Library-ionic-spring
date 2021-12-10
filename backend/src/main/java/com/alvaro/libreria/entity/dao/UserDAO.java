package com.alvaro.libreria.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.alvaro.libreria.entity.models.User;

public interface UserDAO extends CrudRepository<User, Integer>{
	public User findByEmail(String email);
	public User findByPassword(String password);
}
