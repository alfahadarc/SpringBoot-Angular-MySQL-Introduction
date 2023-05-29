package com.springintro.springboot.service;

import com.springintro.springboot.model.BookModel;
import com.springintro.springboot.repository.BookRepo;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service

public class BookService {
    @Autowired
    private BookRepo bookRepository;

    public List<BookModel> getAllBooks(){
        return bookRepository.findAll();
    }

    public BookModel addNewBook(BookModel new_book){
        return bookRepository.save(new_book);
    }

    public BookModel deleteById(long id){
        BookModel book = bookRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid book Id:" + id));
        bookRepository.delete(book);
        return book;
    }

    public BookModel updateBook(long id, BookModel old_book) {
        BookModel book = bookRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Invalid book Id:" + id));

        book.setAuthor(old_book.getAuthor());
        book.setShops(old_book.getShops());
        book.setGenre(old_book.getGenre());
        book.setPrice(old_book.getPrice());
        book.setPublisher(old_book.getPublisher());
        book.setTitle(old_book.getTitle());
        book.setYearOfPublish(old_book.getYearOfPublish());
        return bookRepository.save(book);
    }

    public BookModel getBookById(long id) {
        return bookRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid book Id:" + id));
    }

    public List<BookModel> getBooksByIds(List<Long> bookList) {
        return bookRepository.findAllById(bookList);
    }

    public List<BookModel> getBookByTitle(String title) {
        return bookRepository.findByTitleContainsIgnoreCase(title);
    }

    public void deleteAll() {
        bookRepository.deleteAll();
    }

    public List<BookModel> addAllBooks(List<BookModel> books) {
        return bookRepository.saveAll(books);
    }
}
