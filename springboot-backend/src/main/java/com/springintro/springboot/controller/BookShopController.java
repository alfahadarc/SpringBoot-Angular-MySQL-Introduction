package com.springintro.springboot.controller;


import com.springintro.springboot.model.BookModel;
import com.springintro.springboot.model.BookShopModel;
import com.springintro.springboot.service.BookShopService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api")
@AllArgsConstructor
public class BookShopController {

    private BookShopService bookShopService;

    @PostMapping("/shop/")
    public BookShopModel addNewBookShop(@RequestBody BookShopModel new_bookShop){
        return bookShopService.addNewShop(new_bookShop);
    }
}
