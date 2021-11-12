const App = require('./App');

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

module.exports = User;
