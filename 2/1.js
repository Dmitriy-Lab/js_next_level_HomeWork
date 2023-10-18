"use strict";

/*
###Задание 1
Необходимо создать класс Library. Конструктор класса, должен принимать начальный 
список книг (массив) в качестве аргумента. Убедитесь, что предоставленный массив 
не содержит дубликатов; в противном случае необходимо выбросить ошибку.
1. Класс должен содержать приватное свойство #books.
2. Реализуйте геттер allBooks, который возвращает текущий список книг.

3. Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
Если книга с таким названием уже существует в списке, выбросьте ошибку с 
соответствующим сообщением.
4. Реализуйте метод removeBook(title), который позволит удалять книгу из списка 
по названию. Если книги с таким названием нет в списке, выбросьте ошибку с 
соответствующим сообщением.
5. Реализуйте метод hasBook(title), который будет проверять наличие книги в 
библиотеке и возвращать true или false в зависимости от того, есть ли такая 
книга в списке или нет.
*/

class Library {
    constructor(books) {
        this.allBooks = books;
    }

    #allBooks = [];

    set allBooks(bookList) {
        this.#allBooks = this.checkDuplicate(bookList);
    }

    checkDuplicate(bookList) {
        const filtered = bookList.filter((item, index) => bookList.indexOf(item) !== index);
        if (filtered.length) {
            throw new Error('В списке есть повторяющиеся книги')
        } else {
            return bookList
        }
    }

    get allBooks() {
        return this.#allBooks
    }

    addBook(title) {
        this.#allBooks.forEach(element => {
            if (element === title) {
              throw new Error('В списке уже есть такая книга')
            }});
            this.#allBooks.push(title);
    }

    removeBook(title) {
        
            if (!this.#allBooks.includes(title)) {
              throw new Error('В списке нет такой книги')
            }
            const a = this.#allBooks.find(el => el == title);
            this.#allBooks.splice(this.#allBooks.indexOf(a), 1)
    }

    hasBook(title) {
        return this.#allBooks.includes(title)
    }
}

let lib = new Library(['123', '456', '687']);
