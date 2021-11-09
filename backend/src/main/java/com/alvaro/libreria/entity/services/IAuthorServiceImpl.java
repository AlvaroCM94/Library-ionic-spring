package com.alvaro.libreria.entity.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alvaro.libreria.entity.models.Author;
import com.alvaro.libreria.entity.dao.AuthorDAO;

@Service
public class IAuthorServiceImpl implements IAuthorService{
	
	@Autowired
	private AuthorDAO autorDao;

	@Override
	public Optional<Author> getOne(int id){
		return autorDao.findById(id);
	}

	@Override
	public List<Author> getAll(){
		return (List<Author>) autorDao.findAll();
	}

	@Override
	public void add(Author author){
		autorDao.save(author);
	}

	@Override
	public void update(int id, Author author){
		Optional<Author> c = autorDao.findById(id);
		
		if (c.isPresent()) {
			author.setId(id);
			autorDao.save(author);
		}
	}

	@Override
	public void delete(int id){
		autorDao.deleteById(id);
	}

}
