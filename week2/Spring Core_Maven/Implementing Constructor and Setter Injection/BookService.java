package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private String libraryName;
    private BookRepository repository;

    public BookService(String libraryName) {
        this.libraryName = libraryName;
    }

    public void setRepository(BookRepository repository) {
        this.repository = repository;
    }

    public void manageBooks() {
        System.out.println("Welcome to " + libraryName);
        System.out.println("Service layer activated. Passing to repository...");
        repository.saveBook();
    }
}