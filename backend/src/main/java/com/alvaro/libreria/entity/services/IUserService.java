package com.alvaro.libreria.entity.services;

import java.util.List;
import java.util.Optional;

import com.alvaro.libreria.entity.models.User;

import javassist.NotFoundException;

public interface IUserService {
	Optional<User> getOne(int id);
	//Optional<User> getOneByName(String name);
	User findByEmail(String email) throws NotFoundException;
	User findByPassword(String password) throws NotFoundException;
	List<User> getAll();
	void add(User usuario);
	void update(int id, User usuario);
	void delete(int id);
}
