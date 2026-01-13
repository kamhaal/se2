import { IItem } from './Item.model';

export interface Order {
    getItem(): IItem;
    getPrice(): number;
    getQuantity(): number;
    getId(): string;
}