package com.springintro.springboot.model;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="book")
@ToString
public class BookModel implements Serializable {
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
