const Station = require("./../src/Station")
const Scooter = require('./../src/Scooter')

describe("Station class", () => {
    let manhattanStation = new Station('Manhattan');

        const scooter1 = new Scooter(1, manhattanStation, true, false)
        const scooter2 = new Scooter(2, manhattanStation, true, false)
        const scooter3 = new Scooter(3, manhattanStation, true, false)

        manhattanStation.addScooter(scooter1)
        manhattanStation.addScooter(scooter2)
        manhattanStation.addScooter(scooter3)

    test("Station has a name", () => {
        expect(typeof manhattanStation.cityName).toBe('string')
    }) 
    test("Scooters can be added to the station", () => {
        expect(manhattanStation.scooters.length).toBe(3)
    })
     test('listOfStations returns a list', () => {
        expect(Array.isArray(Station.stations)).toBe(true)
     })
     test('station has a list of scooters', () => {
         console.log(Station.listOfScooters('Manhattan'))
        expect(Array.isArray(Station.listOfScooters('Manhattan'))).toBe(true)
     })
})