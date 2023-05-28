package com.springintro.springboot.controller;


import com.springintro.springboot.model.BookModel;
import com.springintro.springboot.model.BookShopModel;
import com.springintro.springboot.service.BookService;
import com.springintro.springboot.service.BookShopService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "/api")
public class BookShopController {

    @Autowired
    private BookShopService bookShopService;

    @PostMapping("/shops")
    public BookShopModel addNewBookShop(@RequestBody BookShopModel new_bookShop){
        return bookShopService.addNewShop(new_bookShop);
    }


    @GetMapping("/shops")
    public List<BookShopModel>  getAllShops(){
        return bookShopService.getAll();
    }

    @GetMapping("/shops/{id}")
    public BookShopModel getShopById(@PathVariable("id") long id){
        return bookShopService.getShopById(id);
    }

    @PostMapping("/shops/books/{id}")
    public BookShopModel addBooks(@PathVariable("id") long id,@RequestBody List<Long>  books){
        return bookShopService.addBookToShop(id, books);
    }

    @DeleteMapping("/shops/{id}")
    public BookShopModel deleteShop(@PathVariable("id") long id) {
        return bookShopService.deleteById(id);
    }
//    @PutMapping("/books/{id}")
//    public BookModel updateBook(@PathVariable("id") long id,@RequestBody BookModel book){
//        return bookService.updateBook(id,book );
//    }
}
