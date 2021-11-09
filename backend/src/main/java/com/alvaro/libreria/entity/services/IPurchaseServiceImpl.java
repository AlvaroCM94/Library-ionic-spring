package com.alvaro.libreria.entity.services;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.alvaro.libreria.entity.models.Purchase;
import com.alvaro.libreria.entity.dao.PurchaseDAO;

@Service
public class IPurchaseServiceImpl implements IPurchaseService{
	
	@Autowired
	private PurchaseDAO purchaseDAO;

	@Override
	public Optional<Purchase> getOne(int id) {
		return purchaseDAO.findById(id);
	}

	@Override
	public List<Purchase> getAll() {
		return (List<Purchase>) purchaseDAO.findAll();
	}

	@Override
	public void add(Purchase purchase) {
		purchaseDAO.save(purchase);
		
	}

	@Override
	public void update(int id, Purchase purchase) {
		Optional<Purchase> c = purchaseDAO.findById(id);
		
		if (c.isPresent()) {
			purchase.setId(id);
			purchaseDAO.save(purchase);
		}
	}

	@Override
	public void delete(int id) {
		purchaseDAO.deleteById(id);
		
	}

}
