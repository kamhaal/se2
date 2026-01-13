export enum ItemCategory {
    CAKE = "cake",
    BOOK = "book",
    TOY = "toy"
}

export interface IItem {
    getCategory(): ItemCategory;
}


// Toy class implementation
export class TOY implements IItem {

    private name: string;
    private type: string;
    private material: string;
    private ageRange: string;
    private brand: string;
    private price: number;
    private quantity: number;

    constructor(
        name: string,
        type: string,
        material: string,
        ageRange: string,
        brand: string,
        price: number,
        quantity: number
    ) {
        this.name = name;
        this.type = type;
        this.material = material;
        this.ageRange = ageRange;
        this.brand = brand;
        this.price = price;
        this.quantity = quantity;
    }

    getCategory(): ItemCategory {
        return ItemCategory.TOY;
    }
    getName(): string { return this.name; }
    getType(): string { return this.type; }
    getMaterial(): string { return this.material; }
    getAgeRange(): string { return this.ageRange; }
    getBrand(): string { return this.brand; }
    getPrice(): number { return this.price; }
    getQuantity(): number { return this.quantity; }

}



// Book class implementation
export class BOOK implements IItem {

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

}





// Cake class implementation
export class Cake implements IItem {

    private type: string;
    private flavor: string;
    private filling: string;
    private size: number;
    private layers: number;
    private frostingType: string;
    private frostingFlavor: string;
    private decorationType: string;
    private decorationColor: string;
    private customMessage: string;
    private shape: string;
    private allergies: string;
    private specialIngredients: string;
    private packagingType: string;
    private price: number;
    private quantity: number;

    constructor(
        type: string,
        flavor: string,
        filling: string,
        size: number,
        layers: number,
        frostingType: string,
        frostingFlavor: string,
        decorationType: string,
        decorationColor: string,
        customMessage: string,
        shape: string,
        allergies: string,
        specialIngredients: string,
        packagingType: string,
        price: number,
        quantity: number
    ) {
        this.type = type;
        this.flavor = flavor;
        this.filling = filling;
        this.size = size;
        this.layers = layers;
        this.frostingType = frostingType;
        this.frostingFlavor = frostingFlavor;
        this.decorationType = decorationType;
        this.decorationColor = decorationColor;
        this.customMessage = customMessage;
        this.shape = shape;
        this.allergies = allergies;
        this.specialIngredients = specialIngredients;
        this.packagingType = packagingType;
        this.price = price;
        this.quantity = quantity;
    }

    getCategory(): ItemCategory {
        return ItemCategory.CAKE;
    }

    getType(): string { return this.type; }
    getFlavor(): string { return this.flavor; }
    getFilling(): string { return this.filling; }
    getSize(): number { return this.size; }
    getLayers(): number { return this.layers; }
    getFrostingType(): string { return this.frostingType; }
    getFrostingFlavor(): string { return this.frostingFlavor; }
    getDecorationType(): string { return this.decorationType; }
    getDecorationColor(): string { return this.decorationColor; }
    getCustomMessage(): string { return this.customMessage; }
    getShape(): string { return this.shape; }
    getAllergies(): string { return this.allergies; }
    getSpecialIngredients(): string { return this.specialIngredients; }
    getPackagingType(): string { return this.packagingType; }
    getPrice(): number { return this.price; }
    getQuantity(): number { return this.quantity; }
    
    toString(): string {
        return `${this.type} Cake (${this.flavor}) - ${this.price} kr`;
    }
}