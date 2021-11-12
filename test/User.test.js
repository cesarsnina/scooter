const User = require("./../src/User")
const Scooter = require("./../src/Scooter")
const App = require("./../src/App")
const Station = require("./../src/Station")


describe("User class datatypes", () => {
    const testUser = new User("Cesar", "cesar@gmail.com", 20)
    const testUser2 = new User('joe', 'joe@gmail.com', 22,45)

    test("User has name , email, age ", () =>{
        expect(typeof testUser.fullName).toBe("string")
        expect(testUser.fullName).toBe('Cesar')
        expect(typeof testUser.email).toBe("string")
        expect(testUser.email).toBe('cesar@gmail.com')
        expect(typeof testUser.age).toBe('number')
        expect(testUser.age).toBe(20)
        expect(typeof testUser.cash).toBe('number')
        expect(testUser.cash).toBe(0)
        expect(testUser2.cash).toBe(45)
        expect(typeof testUser.hasApp).toBe('boolean')
        expect(testUser.hasApp).toBe(false)
    })
    testUser2.downloadApp(App)
    test('user downloads app',()=>{

        expect(testUser2.hasApp).toBe(true)
        expect(App.userList.length).toBe(1)

    })
    const testApp = new App()
    const testStation = new Station('testville')
    const testScooter = new Scooter(111, 'testville')

    test('user rents scooter',()=>{
        testStation.addScooter(testScooter)
        testApp.rentScooter(testUser2.email,testStation.cityName) // should just put in city name not the station instance

        expect(testUser2.currentScooter).toBe(testScooter)

    })
    test('user returns scooter',()=>{
        testApp.returnScooter(testUser2, testStation)

        expect(testUser2.cash).toBe(33)
        expect(testUser2.currentScooter).toBe(null)
        
    })

})
