const App = require('./App');
const Station = require('./Station');

class User {
    constructor(fullName, email, age, cash = 0)  {
        this.fullName = fullName;
        this.email = email;
        this.age = age;
        this.cash = cash;
        this.hasApp = false;
        this.currentScooter = null;
        this.app = App;
    };

    // download the scooter app
    downloadApp() {
        this.hasApp = true;
        this.app.addUser(this);
        console.log('App download was successful')
    };

    // removes scooter from being rented and add it for repair
    reportBroken(id, station) {
        const city = Station.stations.find(city => 
            city.cityName === station
        )
        if (!city) {
            console.log('station provided doesn\'t exist');
            return;
        }
        for (let i = 0; i < city.scooters.length; i++) {
            if (city.scooters[i].id === id) {
                city.damagedScooter
                    .push(city.scooters.splice(i, 1));
                return;
            }
        }
        console.log('id provided doesn\'t exist');
    };
};

module.exports = User;
