import { IItem, ItemCategory } from './Item.model';


// Book class implementation
export class Book implements IItem {

    private title: string;
    private author: string;
    private isbn: string;
    private genre: string;
    private pages: number;
    private publisher: string;
    private publicationYear: number;
    private price: number;
    private quantity: number;

    constructor(
        title: string,
        author: string,
        isbn: string,
        genre: string,
        pages: number,
        publisher: string,
        publicationYear: number,
        price: number,
        quantity: number
    ) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.genre = genre;
        this.pages = pages;
        this.publisher = publisher;
        this.publicationYear = publicationYear;
        this.price = price;
        this.quantity = quantity;
    }

    getCategory(): ItemCategory {
        return ItemCategory.BOOK;
    }

    getTitle(): string { return this.title; }
    getAuthor(): string { return this.author; }
    getIsbn(): string { return this.isbn; }
    getGenre(): string { return this.genre; }
    getPages(): number { return this.pages; }
    getPublisher(): string { return this.publisher; }
    getPublicationYear(): number { return this.publicationYear; }
    getPrice(): number { return this.price; }
    getQuantity(): number { return this.quantity; }

    toString(): string {
        return `Book: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Genre: ${this.genre}, Pages: ${this.pages}, Publisher: ${this.publisher}, Publication Year: ${this.publicationYear}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }

}




