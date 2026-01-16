import logger from '../../util/logger';
import { Book } from '../Book.model';

export class BookBuilder {

    private title!: string;
    private author!: string;
    private isbn!: string;
    private genre!: string;
    private pages!: number;
    private publisher!: string;
    private publicationYear!: number;
    private price!: number;
    private quantity!: number;

    setTitle(title: string): BookBuilder {
        this.title = title;
        return this;
    }

    setAuthor(author: string): BookBuilder {
        this.author = author;
        return this;
    }

    setIsbn(isbn: string): BookBuilder {
        this.isbn = isbn;
        return this;
    }

    setGenre(genre: string): BookBuilder {
        this.genre = genre;
        return this;
    }

    setPages(pages: number): BookBuilder {
        this.pages = pages;
        return this;
    }

    setPublisher(publisher: string): BookBuilder {
        this.publisher = publisher;
        return this;
    }

    setPublicationYear(publicationYear: number): BookBuilder {
        this.publicationYear = publicationYear;
        return this;
    }

    setPrice(price: number): BookBuilder {
        this.price = price;
        return this;
    }

    setQuantity(quantity: number): BookBuilder {
        this.quantity = quantity;
        return this;
    }

    build(): Book {
        const requiredProperties = [
            this.title,
            this.author,
            this.isbn,
            this.genre,
            this.pages,
            this.publisher,
            this.publicationYear,
            this.price,
            this.quantity
        ];
        for (const prop of requiredProperties) {
            if (!prop) {
                logger.error('Missing required properties to build Book:', { prop });
                throw new Error("Missing required properties");
            }
        }
        return new Book(
            this.title,
            this.author,
            this.isbn,
            this.genre,
            this.pages,
            this.publisher,
            this.publicationYear,
            this.price,
            this.quantity
        );
    }
}   