const Station = require('./Station');
const { validateAge, validateCash } = require('./validate');

class User {
    constructor(firstName, lastName, age, cash) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.cash = cash;
    }

    availableScooter(station) {
        Station.listOfScooter();
    }

    rentScooter(destination) {
        const age = validateAge(this.age);
        const cash = validateCash(this.cash);
        if (age && cash) {
            this.cash = this.cash - 12;
            // set destination
            console.log('Have fun and stay safe!');
        } else {
            console.log('Sorry, maybe next time!');
        }
    }

    reportBroken(id, station) {

    }
}

// const person1 = new User('Larry', 'Anderson', 19, 20);
// person1.rentScooter('NYC');

module.exports = User;
