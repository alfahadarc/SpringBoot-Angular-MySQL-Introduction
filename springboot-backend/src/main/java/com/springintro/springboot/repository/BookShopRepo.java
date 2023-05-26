package com.springintro.springboot.repository;

import com.springintro.springboot.model.BookShopModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookShopRepo extends JpaRepository<BookShopModel, Long> {
}
