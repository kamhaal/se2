describe("Example Test Suite", () => {
    beforeAll(() => {
        console.log("beforeAll: run once before all tests");
    });

    beforeEach(() => {
        console.log("beforeEach: run before each test");
    });

    afterEach(() => {
        console.log("afterEach: run after each test");
    });

    afterAll(() => {
        console.log("afterAll: run once after all tests");
    });

    it("sample test 1", () => {
        console.log("test: sample test 1 running");
        // expect(true).toBe(true);
    });

     it("sample test 2", () => {
        console.log("test: sample test 2 running");
        // expect(true).toBe(true);
    });
});