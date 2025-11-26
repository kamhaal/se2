




export interface Order {  
        id: number;
        item: string;
        price: number;
    }


export class OrderManagement {

    private orders: Order[] = [];
    constructor(private validator: IValidator, private calculator: ICalculator) {}

    getOrders() {
        return this.orders;
    }

    addOrder(item: string, price: number) {
        const order: Order = { id: this.orders.length + 1, item, price };
        this.validator.validate(order);
        this.orders.push(order);
    }

    getOrder(id: number) {
        return this.getOrders().find(order => order.id === id);
    }

    getTotalRevenue() {
        return this.calculator.getRevenue(this.getOrders());
    }
    getAverageBuyPower() {
        return this.calculator.getAverageBuyPower(this.getOrders());
    }

}

export class PremiumOrderManagement extends OrderManagement {
    getOrder(id: number): Order | undefined {
        console.log("Fetching order from PremiumOrderManagement");
        return super.getOrder(id);
    }
}

interface IValidator {
    validate(order: Order): void;
}

interface IPossibleItems {
    getPossibleItems(): string[];
}


export class Validator implements IValidator {

    constructor(private rules: IValidator[] = []) {}

    validate(order: Order): void {
        this.rules.forEach(rule => rule.validate(order));
    }
}

export class ItemValidator implements IValidator, IPossibleItems {
    getPossibleItems(): string[] {
        return ItemValidator.possibleItems;
    }
    
    private static possibleItems = [
        "Sponge",
        "Chocolate",
        "Fruit",
        "Red Velvet",
        "Coffee",
        "Marble",
        "Lemon",
        "Vanilla"
    ];
    validate(order: Order) {
        if (!ItemValidator.possibleItems.includes(order.item)) {
            throw new Error(`Invalid item. Available items are: ${ItemValidator.possibleItems.join(", ")}`);
        }
    }
}

export class PriceValidator extends Validator {
    validate(order: Order) {
        if (order.price <= 0) {
                throw new Error("Price must be a positive number.");
                }
            }
}

export class MaxPriceValidator extends Validator {
    validate(order: Order) {
        if (order.price > 100) {
            throw new Error("Price must not exceed 100.");
        }
    }
}

interface ICalculator {
    getRevenue(orders: Order[]): number;
    getAverageBuyPower(orders: Order[]): number;
}
export class FinancialCalculator {

    public getRevenue(orders: Order[]) {
        return orders.reduce((total, order) => total + order.price, 0);
    }

    public getAverageBuyPower(orders: Order[]) {
        return orders.length === 0 ? 0 : this.getRevenue(orders) / orders.length;
    }
}