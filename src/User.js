const Station = require('./Station');
const App = require("./App");
const Scooter = require('./Scooter')
const { validateAge, validateCash, validateUser } = require('./validate');

class User {
    constructor(fullName, email, age, cash) {
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.cash = cash;
        this.hasApp = false;
        this.currentScooter = null
    }

    // return list of scooter at that station
    availableScooter(station) {
        Station.listOfScooter(station);
    }

    // return a list of station
    findStation() {
        console.log(Station.stations);
    }


    rentScooter(destination) {
        const age = validateAge(this.age);
        const cash = validateCash(this.cash);
        const isUser = validateUser(this.email);
        if (age && cash && isUser) {
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

// const person1 = new User('Larry Anderson', 'larry@gmail.com', 19, 20);
// person1.downloadApp;
// App.addUser(person1.email);
// person1.rentScooter('NYC');
module.exports = User;
