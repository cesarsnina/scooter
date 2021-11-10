const User = require("./../src/User")
const Validate = require("./../src/validate")
const App = require("./../src/App")

describe("User class datatypes", () => {
    test("User can make an account", () => {
        const person1 = new User('Larry Anderson', 'larry@gmail.com', 19, 20);
        person1.rentScooter("NYC");
        App.addUser(person1.email);
        person1.rentScooter("NYC");
        expect(Validate.validateUser(person1.email)).toBe(true)
    })
    test("User gets account made if they try to rent a scooter", () => {
        const person1 = new User('Larry Anderson', 'larry@gmail.com', 19, 20);
        person1.rentScooter("NYC");
        expect(Validate.validateUser(person1.email)).toBe(true)
    })
})
