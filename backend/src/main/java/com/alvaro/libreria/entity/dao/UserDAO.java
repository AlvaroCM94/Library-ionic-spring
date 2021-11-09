package com.alvaro.libreria.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.alvaro.libreria.entity.models.User;

public interface UserDAO extends CrudRepository<User, Integer>{

}
