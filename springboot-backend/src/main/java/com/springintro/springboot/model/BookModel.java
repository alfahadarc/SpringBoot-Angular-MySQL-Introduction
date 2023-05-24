package com.springintro.springboot.model;

public class BookModel {
    private String title;
    private double price;
    private int yearOfPublish;
    private String author;
    private String genre;
    private String publisher;

    public BookModel(String title, double price, int yearOfPublish, String author, String genre, String publisher) {
        this.title = title;
        this.price = price;
        this.yearOfPublish = yearOfPublish;
        this.author = author;
        this.genre = genre;
        this.publisher = publisher;
    }

}
