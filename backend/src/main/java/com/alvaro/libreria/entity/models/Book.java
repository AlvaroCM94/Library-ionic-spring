package com.alvaro.libreria.entity.models;

import java.io.Serializable;
//import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
//import javax.persistence.JoinColumn;
//import javax.persistence.JoinTable;
//import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "book")
public class Book implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String author;
	private String genre;
	private String synopsis;
	private int stock;
	private String image;
	private int fk_author;
	
	
	/*@ManyToOne
	@JoinTable(name = "author",
		joinColumns = 
			{@JoinColumn(name ="name", referencedColumnName = "name")}
	)
	private Collection authorByFkAuthor;*/
	
	public Book(){}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getSynopsis() {
		return synopsis;
	}

	public void setSynopsis(String synopsis) {
		this.synopsis = synopsis;
	}

	public int getStock() {
		return stock;
	}

	public void setStock(int stock) {
		this.stock = stock;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getFk_author() {
		return fk_author;
	}

	public void setFk_author(int fk_author) {
		this.fk_author = fk_author;
	}

	/*public Collection getAuthorByFkAuthor() {
		return authorByFkAuthor;
	}

	public void setAuthorByFkAuthor(Collection authorByFkAuthor) {
		this.authorByFkAuthor = authorByFkAuthor;
	}*/


	

}
