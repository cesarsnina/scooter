const Station = require('./Station');
const App = require('./App');
const Scooter = require('./Scooter');
const { validateAge, validateCash, validateUser } = require('./validate');

class User {
    constructor(fullName, email, age, cash = 0)  { //added default cash to 0
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.cash = cash;
        this.hasApp = false;
        this.currentScooter = null;
    };

    // download the scooter app
    downloadApp(app) {
        this.hasApp = true;
        app.addUser(this);
    };

    reportBroken(id, station) {

    }
};

// const person1 = new User('Larry Anderson', 'larry@gmail.com', 19, 20);
// person1.downloadApp();
// App.addUser(person1.email);
// person1.rentScooter('NYC');

module.exports = User;
