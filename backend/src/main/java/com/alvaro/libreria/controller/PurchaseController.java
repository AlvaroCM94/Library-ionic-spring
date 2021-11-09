package com.alvaro.libreria.controller;

import java.util.List;
import java.util.Optional;

import com.alvaro.libreria.entity.models.Purchase;
import com.alvaro.libreria.entity.services.IPurchaseService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
public class PurchaseController {
	@Autowired
	IPurchaseService purchaseService;

	@GetMapping("/purchase")
	List<Purchase> getAll(){
		return purchaseService.getAll();
	}

	@GetMapping("/purchase/{id}")
	Purchase getOne(@PathVariable("id") int id) {
		Optional<Purchase> l = purchaseService.getOne(id);

		if(l.isPresent()) {
			return l.get();
		};

		return null;
	}

	@PostMapping("/purchase")
	void add(Purchase purchase) {
		//System.out.println(purchase.getName());
		purchaseService.add(purchase);
	}

	@PostMapping(value="/purchase", consumes="application/json")
	void addUsingJson(@RequestBody String purchaseString) {
		ObjectMapper om = new ObjectMapper();
		try {
			Purchase purchase = om.readValue(purchaseString, Purchase.class);
			purchaseService.add(purchase);
		} catch (JsonMappingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (JsonProcessingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	@PutMapping(value = "/purchase/{id}")
    void update(@PathVariable(value = "id") int id, Purchase purchase) {
		//System.out.println(purchase.getName());
		purchaseService.update(id, purchase);
    }

	@DeleteMapping("/purchase/{id}")
	void delete(@PathVariable("id") int id) {
		System.out.println(id);
		purchaseService.delete(id);
	}
}
