const Station = require("./../src/Station")

describe("Station class datatypes", () => {
    test("Station has a city", () => {
        const manhattanStation = new Station("Manhattan");
        expect(typeof manhattanStation.cityName).toBe("string")
    }) 
})