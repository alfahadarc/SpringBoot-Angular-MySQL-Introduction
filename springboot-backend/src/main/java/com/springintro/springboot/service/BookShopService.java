package com.springintro.springboot.service;

import com.springintro.springboot.model.BookShopModel;
import com.springintro.springboot.repository.BookShopRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class BookShopService {

    private BookShopRepo bookShopRepo;

    public BookShopModel addNewShop(BookShopModel newShop){
        return bookShopRepo.save(newShop);
    }
}
