package com.alvaro.libreria.entity.dao;

import org.springframework.data.repository.CrudRepository;

import com.alvaro.libreria.entity.models.Purchase;

public interface PurchaseDAO extends CrudRepository<Purchase, Integer> {

}
