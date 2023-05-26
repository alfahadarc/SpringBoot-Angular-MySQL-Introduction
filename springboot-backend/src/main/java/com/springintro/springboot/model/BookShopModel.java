package com.springintro.springboot.model;


import jakarta.persistence.*;
import jakarta.validation.constraints.*;
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
@Table(name="bookshop")
public class BookShopModel {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long shopNumber;
    @NotBlank(message = "Name is mandatory")
    private String shopName;
    @NotBlank(message = "Location is mandatory")
    private String location;
    private List<BookModel> books;
    private String contactNo;
    private String email;
}
