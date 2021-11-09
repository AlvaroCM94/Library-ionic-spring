package com.alvaro.libreria.entity.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alvaro.libreria.entity.models.Book;
import com.alvaro.libreria.entity.dao.BookDAO;

@Service
public class IBookServiceImpl implements IBookService{

	@Autowired
	private BookDAO bookDao;
	
	@Override
	public Optional<Book> getOne(int id){
		return bookDao.findById(id);
	}

	@Override
	public List<Book> getAll(){
		
		return (List<Book>) bookDao.findAll();
	}

	@Override
	public void add(Book book){
		bookDao.save(book);
		
	}

	@Override
	public void update(int id, Book book){
		Optional<Book> c = bookDao.findById(id);
		
		if (c.isPresent()) {
			book.setId(id);
			bookDao.save(book);
		}
	}

	@Override
	public void delete(int id){
		bookDao.deleteById(id);
		
	}

}
