const Scooter = require("./../src/Scooter")

describe("Scooter class datatypes", () => {
    test("Scooter has an ID", () => {
        const scooter1 = new Scooter("117", "Queens", true, false);
        expect(typeof scooter1.id).toBe("string")
    }) 
})