package com.springintro.springboot.model;


import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="bookshop")
@ToString
public class BookShopModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String shopName;
    private String location;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "book_shop_join",
            joinColumns = @JoinColumn(name = "shop_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "book_id", referencedColumnName = "id"))
    @JsonManagedReference
    private List<BookModel> books;
    private String contactNo;
    private String email;
}
