package com.springintro.springboot.controller;

import com.springintro.springboot.model.BookModel;
import com.springintro.springboot.service.BookService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping(path = "/api")
@AllArgsConstructor
public class BookController {

    private final BookService bookService;

    @GetMapping("/books")
    public List<BookModel> getAllBooks(){
        return bookService.getAllBooks();
    }

    @PostMapping("/books/")
    public BookModel addNewBook(@RequestBody BookModel new_book){
        return bookService.addNewBook(new_book);
    }

}
