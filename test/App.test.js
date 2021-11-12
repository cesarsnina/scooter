const App = require("./../src/App")
const User = require("./../src/User")
const Scooter = require("./../src/Scooter")
const Station = require("./../src/Station")

describe("App class datatypes", () => {
    const user1 = new User("Person 1", "person1@gmail.com", 30, 100)
    const user2 = new User("Person 2", "person2@gmail.com", 28, 20)
    const user3 = new User("Person 3", "person3@gmail.com", 27, 50)
    const user4 = new User("Person 4", "person4@gmail.com", 27, 50)

    const scooter01 = new Scooter("101", "The Bronx", true, false)
    const scooter02 = new Scooter("102", "The Bronx", true, false)
    const scooter03 = new Scooter("103", "The Bronx", true, false)
    const scooter04 = new Scooter("104", "Manhattan", true, false)
    const scooter05 = new Scooter("105", "Manhattan", true, false)
    const scooter06 = new Scooter("106", "Manhattan", true, false)
    const scooter07 = new Scooter("107", "Queens", true, false)
    const scooter08 = new Scooter("108", "Queens", true, false)
    const scooter09 = new Scooter("109", "Brooklyn", true, false)
    const scooter10 = new Scooter("110", "Brooklyn", true, false)
    const scooter11 = new Scooter("111", "Brooklyn", true, false)
    const scooter12 = new Scooter("112", "Brooklyn", true, false)
    const scooter13 = new Scooter("113", "Staten Island", true, false)
    const scooter14 = new Scooter("114", "Staten Island", true, false)

    const bronxStation = new Station("The Bronx")
    const manhattanStation = new Station("Manhattan")
    const queensStation = new Station("Queens")
    const brooklynStation = new Station("Brooklyn")
    const statenStation = new Station("Staten Island")

    test("App returns array of all users from static function", () => {
        user1.downloadApp()
        user2.downloadApp()
        user3.downloadApp()
        expect(App.userList.length).toBe(3)
    })

    test("App returns array off all stations", () => {
        expect(App.listOfStation().length).toBe(5)
    })

    test("App returns scooter list at specified station", () => {
        bronxStation.addScooter(scooter01)
        bronxStation.addScooter(scooter02)
        bronxStation.addScooter(scooter03)
        manhattanStation.addScooter(scooter04)
        manhattanStation.addScooter(scooter05)
        manhattanStation.addScooter(scooter06)
        queensStation.addScooter(scooter07)
        queensStation.addScooter(scooter08)
        brooklynStation.addScooter(scooter09)
        brooklynStation.addScooter(scooter10)
        brooklynStation.addScooter(scooter11)
        brooklynStation.addScooter(scooter12)
        statenStation.addScooter(scooter13)
        statenStation.addScooter(scooter14)
        expect(App.scootersAtStation("The Bronx").length).toBe(3)
        expect(App.scootersAtStation("Manhattan").length).toBe(3)
        expect(App.scootersAtStation("Queens").length).toBe(2)
        expect(App.scootersAtStation("Brooklyn").length).toBe(4)
        expect(App.scootersAtStation("Staten Island").length).toBe(2)
    })

    test("App allows user to rent scooter", () => {
        user4.downloadApp()
        const user4App = new App()
        user4App.rentScooter(user4.email, "Staten Island")
        expect(user4.currentScooter.id).toBe("114")
    })

    test("App removes rented scooter from rented station", () => {
        expect(App.scootersAtStation("Staten Island").length).toBe(1)
    })

    test("App allows user to return scooter", () => {
        const user4App = new App()
        user4App.returnScooter(user4, bronxStation)
        expect(App.scootersAtStation("Staten Island").length).toBe(1)
        expect(App.scootersAtStation("The Bronx").length).toBe(4)
    })

    test("App removes scooter from user after returning", () => {
        expect(user4.currentScooter).toBe(null)
    })

    test("App does not allow user without app to rent scooter", () => {
        const user5 = new User("Person 5", "person5@gmail.com", 12, 100)
        user5App = new App()
        user5App.rentScooter(user5.email, "Brooklyn")
        expect(user5.currentScooter).toBe(null)
    })

    test("App takes 12 cash away from user after returning scooter", () => {
        const user6 = new User("Person 5", "person5@gmail.com", 20, 100)
        const initCash = user6.cash
        user6.downloadApp()
        const user6App = new App()
        user6App.rentScooter(user6.email, "Staten Island")
        user6App.returnScooter(user6, bronxStation)
        expect(user6.cash).toBe(initCash - 12)
    })
})
