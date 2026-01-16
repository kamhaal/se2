import logger from '../../util/logger';
import { Toy } from '../Toy.model';

export class ToyBuilder {
    private name!: string;
    private type!: string;
    private material!: string;
    private ageRange!: string;
    private brand!: string;
    private price!: number;
    private quantity!: number;

    setName(name: string): ToyBuilder {
        this.name = name;
        return this;
    }
    
    setType(type: string): ToyBuilder {
        this.type = type;
        return this;
    }
    setMaterial(material: string): ToyBuilder {
        this.material = material;
        return this;
    }
    setAgeRange(ageRange: string): ToyBuilder {
        this.ageRange = ageRange;
        return this;
    }
    setBrand(brand: string): ToyBuilder {
        this.brand = brand;
        return this;
    }
    setPrice(price: number): ToyBuilder {
        this.price = price;
        return this;
    }
    setQuantity(quantity: number): ToyBuilder {
        this.quantity = quantity;
        return this;
    }

    build(): Toy {
        const requiredProperties = [
            this.name,
            this.type,
            this.material,
            this.ageRange,
            this.brand,
            this.price,
            this.quantity
        ];
        for (const prop of requiredProperties) {
            if (!prop) {
                logger.error('Missing required properties to build Toy:', { prop });
                throw new Error("Missing required properties");
            }
        }
        return new Toy(
            this.name,
            this.type,
            this.material,
            this.ageRange,
            this.brand,
            this.price,
            this.quantity
        );
    }
}