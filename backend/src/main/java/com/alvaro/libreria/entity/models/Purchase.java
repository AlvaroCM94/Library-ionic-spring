package com.alvaro.libreria.entity.models;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "purchase")
public class Purchase implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name_book;
	private String name_user;
	private int fk_user;
	
	public Purchase(int id, String name_book, String name_user, int fk_user) {
		super();
		this.id = id;
		this.name_book = name_book;
		this.name_user = name_user;
		this.fk_user = fk_user;
	}

	public Purchase(){}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName_book() {
		return name_book;
	}

	public void setName_book(String name_book) {
		this.name_book = name_book;
	}

	public String getName_user() {
		return name_user;
	}

	public void setName_user(String name_user) {
		this.name_user = name_user;
	}

	public int getFk_user() {
		return fk_user;
	}

	public void setFk_user(int fk_user) {
		this.fk_user = fk_user;
	}

	
	

}
