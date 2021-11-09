package com.alvaro.libreria.entity.services;

import java.util.List;
import java.util.Optional;

import com.alvaro.libreria.entity.models.Purchase;

public interface IPurchaseService {
	Optional<Purchase> getOne(int id);
	List<Purchase> getAll();
	void add(Purchase compra);
	void update(int id, Purchase compra);
	void delete(int id);
}

