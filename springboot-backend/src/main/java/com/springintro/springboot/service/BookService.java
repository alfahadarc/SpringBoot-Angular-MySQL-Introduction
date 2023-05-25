package com.springintro.springboot.service;

import com.springintro.springboot.model.BookModel;
import com.springintro.springboot.repository.BookRepo;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BookService {
    private BookRepo bookRepository;

    public List<BookModel> getAllBooks(){
        return bookRepository.findAll();
    }

    public BookModel addNewBook(BookModel new_book){
        System.out.println("hi");
        return bookRepository.save(new_book);
    }
}
