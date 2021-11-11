const App = require("./../src/App")
const User = require("./../src/User")
const Scooter = require("./../src/Scooter")
const Station = require("./../src/Station")

describe("App class datatypes", () => {
    const scooter1 = new Scooter("100", "The Bronx", true, false)
    const scooter2 = new Scooter("101", "The Bronx", true, false)
    const scooter3 = new Scooter("102", "The Bronx", true, false)
    const bronxStation = new Station("The Bronx")
    bronxStation.addScooter(scooter1)
    bronxStation.addScooter(scooter2)
    bronxStation.addScooter(scooter3)

    test("App returns scooter list at specified station", () => {
        expect(App.scootersAtStation("The Bronx").length).toBe(3)
    }) 
})