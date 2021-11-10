const validate = require("./../src/validate")
const User = require("./../src/User");
describe("validate class datatypes", () => {
    test("validate returns false if cash is less than 12", () => {
        const valPerson = new User("Linzi Garcia", "linzi@mymail.com", 25, 10)
        const hasCash = validate.validateCash(valPerson.cash)
        expect(hasCash).toBe(false)
    }) 
})