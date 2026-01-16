
import { IItem, ItemCategory } from './Item.model';


// Toy class implementation
export class Toy implements IItem {

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

    toString(): string {
        return `Toy: ${this.name}, Type: ${this.type}, Material: ${this.material}, Age Range: ${this.ageRange}, Brand: ${this.brand}, Price: $${this.price.toFixed(2)}, Quantity: ${this.quantity}`;
    }   

}