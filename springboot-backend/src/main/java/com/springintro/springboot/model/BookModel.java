package com.springintro.springboot.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="book")
public class BookModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private double price;
    private int yearOfPublish;
    private String author;
    private String genre;
    private String publisher;
    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "book_shop_join",
            joinColumns = @JoinColumn(name = "book_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "shop_id", referencedColumnName = "id"))
    private List<BookShopModel> shops;

}
