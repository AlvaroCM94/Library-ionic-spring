package com.alvaro.libreria.entity.services;
/*
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
//import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import com.alvaro.libreria.entity.dao.UserDAO;
import com.alvaro.libreria.entity.models.User;

public class JpaUserDetailsService {
	
	@Autowired
	private UserDAO userDAO;
	
	@Override
	public User findByName(String name, String password) throws UsernameNotFoundException{

		User user = userDAO.findByName(name);
		
		if(user == null){
			throw new UsernameNotFoundException("El usuario " + name + " no existe");
		}
		
		if(user.getPassword() != password){
			throw new UsernameNotFoundException("Contraseña incorrecta");
		}
		
		return user;
	}
 
}*/
