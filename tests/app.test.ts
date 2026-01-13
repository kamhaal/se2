import {OrderManagement, Validator, FinancialCalculator} from "../src/app";
import type { Order } from "../src/app";

describe("OrderManagement", () => {

    let validator: Validator;
    let calc: FinancialCalculator;
    let baseValidator: (order: Order) => void;
    // let baseValidator: (Order) => void;
    let orderMannager: OrderManagement;

    beforeAll(() => {
        validator = new Validator();
        calc = new FinancialCalculator();
    });

    beforeEach(() => {
        baseValidator = validator.validate;
        validator.validate = jest.fn();
        orderMannager = new OrderManagement(validator, calc);
    });

    afterEach(() => {
        validator.validate = baseValidator;
    });

    it("should add an order", () => {


        // Arrange
        const item = "Test Item";
        const price = 10;

        // Act
        orderMannager.addOrder(item, price);

        // Assert
        expect(orderMannager.getOrders()).toEqual([{ id: 1, item, price }]);
    });

    it("should get an order", () => {

        // Arrange;
        const item = "Test Item";
        const price = 10;
        orderMannager.addOrder(item, price);

        // Act
        const order = orderMannager.getOrder(1);

        // Assert
        expect(order).toEqual({ id: 1, item, price });
    });

    it("should call finance calculator getRevenue method", () => {
        // Arrange
        const spy = jest.spyOn(calc, 'getRevenue');
        const item = "Test Item";
        const price = 10;
        orderMannager.addOrder(item, price);

        // Act
        orderMannager.getTotalRevenue();

        // Assert
        expect(spy).toHaveBeenCalled();
        expect(spy).toHaveBeenCalledWith([{ id: 1, item, price }]);
        expect(spy).toHaveReturnedWith(10);
    });

    it("should throw addition exception if validator dose not pass", () => {  
        // Arrange
        const item = "Test Item";
        const price = 10;
        (validator.validate as jest.Mock).mockImplementation(() => {
            throw new Error("Validation failed");
        })

        //Act
        orderMannager.addOrder(item, price);
        
        expect(() => {
            orderMannager.addOrder(item, price);
        }).toThrow("Validation failed");

    });
});

describe("FinancialCalculator", () => {
    it("should calculate total revenue", () => {

        // Arrange
        const calculator = new FinancialCalculator();
        const orders = [
            { id: 1, item: "Item 1", price: 10 },
            { id: 2, item: "Item 2", price: 20 },
            { id: 3, item: "Item 3", price: 30 },
        ];

        // Act
        const revenue = calculator.getRevenue(orders);

        // Assert
        expect(revenue).toEqual(60);
    });

    it("should calculate average buy power", () => {

        // Arrange
        const calculator = new FinancialCalculator();
        const orders = [
            { id: 1, item: "Item 1", price: 10 },
            { id: 2, item: "Item 2", price: 20 },
            { id: 3, item: "Item 3", price: 30 },
        ];

        // Act
        const averageBuyPower = calculator.getAverageBuyPower(orders);

        // Assert
        expect(averageBuyPower).toEqual(20);
    });

})